export default class ServerError extends Error {
  constructor(message) {
    super(message);
    if (!this.message) {
      this.message = 'Not found';
    }
    this.httpStatus = 500;
  }
}
