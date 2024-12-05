import { model, Schema } from "mongoose";

interface activities {
    tittle: String;
    endDate: Date;
    description: String;
    state: "active" | "pending";
    UserId: Schema.Types.ObjectId | String;
}

const activitySchema = new Schema <activities> ({
    tittle: {
        type: String,
        required: true
    },

    endDate: {
        type: Date,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    state: {
        type: String,
        enum: ["active", "pending"],
        default: "pending"
    },

    UserId: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },

})
export const activitymodel = model("activity", activitySchema);