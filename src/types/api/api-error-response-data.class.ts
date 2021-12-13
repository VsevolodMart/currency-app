import { IAnyResponseData } from '@/types/api/any-response-data.interface';

export default class ApiErrorResponseData {

  public code: number;
  public error: string = 'Unknown';
  public requestId: string;
  public messageKey: string;

  constructor(data: IAnyResponseData = null) {
    if (!data) {
      return;
    }
    if (data.error) {
      this.error = '' + data.error;
    }
    if (data.request_id) {
      this.requestId = '' + data.request_id;
    }
    if (data.code) {
      this.code = (data.code as number);
    }
    this.messageKey = this._errTextByCode(this.code, this.error);
  }

  private _errTextByCode(code: number, defaultText: string = ''): string {
    switch (code) {
      // case 2:
      //   return 'errors.api.invalid_object_schema';
      case 3:
        return 'errors.api.auth_fail';
      case 5:
        return 'errors.api.invalid_sms_code';
      // case 7:
      //   return 'errors.api.forbidden_firewall_auth';
      // case 11:
      //   return 'errors.api.internal_server_error';
      // case 0:
      default:
        if (defaultText) {
          return defaultText;
        }
        return 'errors.api.connection_error';
    }
  }

}
