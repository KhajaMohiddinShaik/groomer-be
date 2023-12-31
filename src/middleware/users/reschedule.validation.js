const messages = require("../../utils/constant");
const { successResponse, errorResponse } = require("../../utils/response");
const SlotModel = require("../../models/client/slot.model")
const validation = require("../../utils/rescheduleAppointment.joi")
const AppointmentModel = require("../../models/client/appointment.model")
const moment = require("moment");
const checkAppointment = async (req, res, next) => {
    try {
        const slotUuid = req.body.slot_uuid
        // we are validating joi with inputs 
        const payload = {
            appointment_uuid: req.body.appointment_uuid,
            slot_uuid: req.body.slot_uuid,
            timing: req.body.timing,
            date: req.body.date,
        };
        const { error } = validation.validate(payload);
        if (error) return res.status(400).json(errorResponse(400, error.details[0].message, {}));
        
        // now we will check is user reschedule their appointment or trying with any other users appointment 
        const appointment = await AppointmentModel.findOne({appointment_uuid: req.body.appointment_uuid})
        if (appointment.appointment_user_uuid != req.uuid) return res.status(403).json(errorResponse(400, messages.error.CAN_NOT_PERFORM_TASK, {}));

        // now we will is requested appointment is already scheduled or not
        if(appointment.appointment_status == "scheduled") return res.status(400).json(errorResponse(400, messages.error.APPOINTMENT_ALREADY_RESCHEDULED, {}))
        
        // now we will validate the slots that are they available or not if available then we will attach the slot uuids with req object
        const slot = await SlotModel.findOne({slot_uuid: slotUuid, slot_isActive: true, slot_date: req.body.date, slot_time: req.body.timing})
        // console.log(slot);
        if(!slot) return res.status(400).json(errorResponse(400, messages.error.SLOT_NOT_AVAILABLE, {}));
        const slotUuids = []
        slotUuids.push(slotUuid)
        const numberOfSlots = parseInt(appointment.appointment_duration) / 30
        const slotTime = moment(slot.slot_time, 'h:mm A');
        for (let i = 0; i < numberOfSlots - 1; i++) {
            slotTime.add(30, "minutes");
            const nextSlot = await SlotModel.findOne({slot_salon_uuid: appointment.appointment_salon_uuid, slot_date: slot.slot_date, slot_time: slotTime.format('h:mm A'), slot_isActive: true})
            if(!nextSlot) return res.status(400).json(errorResponse(400, messages.error.SLOT_NOT_AVAILABLE, {}));
            slotUuids.push(nextSlot.slot_uuid)
        }
        req.slotUuids = slotUuids
        next();
    } catch (error) {
        return res.status(500).json(errorResponse(500, messages.error.WRONG, {}));
    }
};

module.exports = checkAppointment;
//developed by Nitin Goswami