const success = {
    SUCCESS: "success..",
    USER_CREATED: "User is created.",
    ADMIN_CREATED: "Admin is created.",
    NO_USER_FOUND: "No User Found Please do Sign Up first",
    OTP_CREATED: "OTP sent to your email Id. Now Please verify with OTP",
    USER_VERIFIED: "OTP verified, Now You can Login.",
    REGISTRATION_OTP_CREATED: "OTP sent to your email Id. Now Please Verify your account with OTP.",
    OTP_EXPIRED: "OTP is expired now. Please generate New OTP",
    LOGGED_IN: "User logged in successfully",
    INVALID_OTP: "OTP is Invalid. Try again...",
    OTP_LIMIT: "You exceed your Wrong OTP limit. Now generate New OTP after 2 Minutes",
    ADMIN_LOGIN: "Logged in successfully",
    SALON_ADDED: "Salon added successfully.",
    ALREADY_SALON: "Salon already found with this salon code or username.",
    SALON_UPDATED: "Salon updated successfully.",
    SLOTS_CREATED_ONBOARD: "Slots Created for 7 days including today.",
    SLOTS_CREATED_DAILY: "Slots created for all salons.",
    WISHLIST_DELETED: "Wishlist is deleted.",
    DELETED: "Deleted.",
    SLOT_DISABLE: "Slot is disable",
    SLOT_ENABLE: "Slot is enable",
    REACHED_LIMIT: "Limit reached.",
    REFUND_SLOT_ALREADY_BOOKED: "Sorry for the inconvenience, Selected Slot is not available. Your refund will be initiated. Try with another slot again.",
    APPOINTMENT_BOOKED: "Your appointment is now booked.",
    PAYMENT_PENDING: "Payment is pending. Try again for payment status after 5 second.",
    SALON_DELETED: "Salon is deleted.",
    APPOINTMENT_CANCEL: "Your appointment is now cancelled and your refund is being initiated.",
    SALON_ENABLE: "Salon is now enabled.",
    SALON_DISABLE: "Salon is now disabled.",
    APPOINTMENT_INITIATED: "Your appointment for selected slot is initiated. Now please complete payment for booking.",
    RESCHEDULE_APPOINTMENT_INITIATED: "Your reschedule appointment for selected slot is initiated. Now please complete payment for booking.",
    SALON_RECOMMENDED: "Salon is added for recommendation",
    SALON_NOT_RECOMMENDED: "Salon is removed from recommendation",
    SALON_CLOSE: "Salon is Closed for today",
    SALON_OPEN: "Salon is Opened for today",
}
const error = {
    WRONG: "Something went wrong..",
    ALREADY_USER: "User is already registered..",
    ALREADY_ADMIN: "Admin is already registered.",
    NO_OTP: "Please Generate OTP First.",
    INVALID_JWT: "Unauthorized access",
    WRONG_PASSWORD: "Wrong password.",
    WRONG_WITH_JWT: "Something went wrong with jwt token",
    USER_NOT_FOUND: "This is user not registerd. Please do sign Up first..",
    ADMIN_NOT_FOUND: "Admin not found. Please create new Admin",
    NO_USER: "User not found.",
    NOT_AUTHORIZED: "You are not authorized to perform this.",
    NO_ITEM: "No item found.",
    NO_JWT: "Token not found",
    MISSING_INPUTS: "Required input for registration are not found",
    NO_SALON_FOUND: "No Salon found with this Salon code.",
    NO_SALON_UUID: "No Salon found with this uuid.",
    WRONG_SALON_CODE: "Salon code is wrong or salon not available, check salon code.",
    OTHER_SALON_INFO: "You are not authorise to perform this task.",
    SLOT_NOT_FOUND: "Slot not found with this uuid.",
    NOT_FOUND: "Not found",
    SLOT_NOT_AVAILABLE: "Selected slot is not found. It may be fully booked or not Active",
    PAYMENT_FAILED: "Payment is failed. Try again.",
    CAN_NOT_CANCEL: "You cannot cancel the appointment within 2 hour of the appointment time or after the appointment time.",
    CAN_NOT_RESCHEDULE: "You cannot re-schedule the appointment within 1 hour of the appointment time.",
    CODE_CHAR_REQ: "Salon code first 3 characters are required to send in query parameter.",
    CODE_CHAR_LEN: "Salon code key should have length of 3.",
    SALON_NOT_ACTIVE: "Salon is not active.",
    CAN_NOT_PERFORM_TASK: "Can not perform this task",
    APPOINTMENT_ALREADY_RESCHEDULED: "This appointment is already rescheduled.",
    CITY_NAME_REQ: "Bad request, City name is required to send.",
    COORDINATES_REQ: "Bad request, Co-ordinated is required to send.",
    UUID_REQUIRED: "Uuid is required to send.",
    SLOT_FULLY_BOOKED: "The slot you want to toggle is fully booked by the customers so you can not disable or enable the slot.",
    ALREADY_IN_WISHLIST: "This salon already found in this users wishlist",
    CAN_NOT_GIVE_FEEDBACK: "You are unable to give feedback. Take service first in the salon.",
    SALON_UUID_REQUIRED: "Salon uuid is required to send.",
    CAN_NOT_CLOSE_SALON: "Salon cannot be marked as holiday because there are booked appointments for today."
}

const subject = {
    APPOINTMENT_CANCEL: "Groomer Appointment cancellation.",
    APPOINTMENT_BOOKED: "Groomer Appointment Confirmation.",
    APPOINTMENT_RESCHEDULED: "Groomer Appointment Rescheduled.",
    PAYMENT_FAILED: "Payment is failed.",

}
module.exports = { success, error, subject};

//developed by Nitin Goswami