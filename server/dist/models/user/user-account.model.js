"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// This is the schema for the user_account collection
const UserAccountSchema = new mongoose_1.default.Schema({
    user_type_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "UserType",
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        length: 255,
        index: {
            unique: true,
        },
    },
    password: {
        type: String,
        required: true,
        length: 100,
    },
    date_of_birth: {
        type: Date,
        required: false,
    },
    gender: {
        type: String,
        required: false,
        length: 10,
    },
    is_active: {
        type: Boolean,
        required: false,
    },
    contact_number: {
        type: String,
        required: false,
        length: 15,
    },
    sms_notification_active: {
        type: Boolean,
        required: false,
        default: false,
    },
    email_notification_active: {
        type: Boolean,
        required: false,
        default: false,
    },
    user_image: {
        type: String,
        required: false,
    },
    registration_date: {
        type: Date,
        required: true,
    },
}, {
    collection: "user_account",
    timestamps: true,
});
// Set the registration date on save
UserAccountSchema.pre("save", function (next) {
    let user = this;
    if (!user.registration_date) {
        user.registration_date = new Date();
    }
    next();
});
// Password hashing
UserAccountSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password"))
        return next();
    bcrypt_1.default.genSalt(10, function (err, salt) {
        if (err)
            return next(err);
        bcrypt_1.default.hash(user.password, salt, function (err, hash) {
            if (err)
                return next(err);
            user.password = hash;
            next();
        });
    });
});
// Password comparison
UserAccountSchema.methods.comparePassword = function (password) {
    return bcrypt_1.default.compareSync(password, this.password);
};
// Generate JWT token
UserAccountSchema.methods.generateJWT = function () {
    // Set the expiration date to 60 days
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
    const payload = {
        id: this._id,
        email: this.email,
    };
    const jwtSecret = process.env.JWT_SECRET || "jwt_secret";
    return jsonwebtoken_1.default.sign(payload, jwtSecret, {
        expiresIn: parseInt((expirationDate.getTime() / 1000).toString(), 10),
    });
};
const UserAccount = mongoose_1.default.model("UserAccount", UserAccountSchema);
exports.default = UserAccount;
