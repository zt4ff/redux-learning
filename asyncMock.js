const getAsyncName = () => {
  return new Promise((r) => setTimeout(r("Async Kayode", 500)));
};

const getAsyncChurch = () => {
  return new Promise((r) => setTimeout(r("Async Kosofe BC", 500)));
};

exports.getAsyncChurch = getAsyncChurch;
exports.getAsyncName = getAsyncName;
