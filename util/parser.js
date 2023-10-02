function parseError(error) {
  if (Array.isArray(error)) {
    // These Errors come from the Express-Validator
    return error.map((e) => e.msg).join('\n');
  } else if (error.name == 'ValidationError') {
    // These Errors come from the Mongoose
    return Object.values(error.errors)
      .map((v) => v.message)
      .join('\n');
  } else {
    // These are System Errors
    return error.message;
  }
}

module.exports = {
  parseError,
};
