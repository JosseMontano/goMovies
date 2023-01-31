export default interface SingUpType {
  email: string;
  password: string;
  password_confirmation: string;
  display_name: string;
  accept_conditions?: Boolean | string;
}
