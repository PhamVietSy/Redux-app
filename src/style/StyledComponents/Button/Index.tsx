import { AppButton } from './style';

export const ButtonType = {
    DEFAULT: 'DEFAULT',
    EDIT: 'EDIT',
    DELETE: 'DELETE',
    DONE: 'DONE',
    CANCEL: 'CANCEL',
};
export const Button = ({ ...rest }) => {
    return <AppButton {...rest}></AppButton>;
};
