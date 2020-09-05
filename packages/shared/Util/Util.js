export default class Util {
  static generateUniqueId(bytes) {
    return crypto.randomBytes(bytes).toString('HEX');
  }
}
