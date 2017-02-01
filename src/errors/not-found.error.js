export default class NotFoundError extends Error {
  constructor(message) {
    super(message);
    if (!this.message) {
      this.message = 'Not found';
    }
    this.httpStatus = 404;
  }
}
