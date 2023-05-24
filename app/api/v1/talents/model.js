const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let talentSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Nama harus di isi"],
    },
    role: {
      type: String,
      default: "-",
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: "Organizer",
      required: true,
    },
    //! Untuk membuat relasi pada mongodb kita perlu membuat types objectID
    image: {
      type: mongoose.Types.ObjectId,
      //! Reference kan kemana dan nama harus sama dengan nama export model tujuan
      ref: "Image",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Talent", talentSchema);
