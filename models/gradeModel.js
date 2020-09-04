export default (mongoose) => {
  const gradesSchema = mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    value: {
      type: String,
      require: true,
      min: 0,
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  });

  const gradesModel = mongoose.model('grades', gradesSchema);
  return gradesModel;
};
