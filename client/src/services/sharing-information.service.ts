import { SubjectManager } from '../utilities/subject-manager.utility';

export const checkboxService = new SubjectManager<boolean>();
export const modalToast = new SubjectManager<boolean>();
export const modalToastError = new SubjectManager<boolean>();
export const modalSentService = new SubjectManager<boolean>();
export const modalSuccessfulRegistration = new SubjectManager<boolean>();
export const modalSendRequest = new SubjectManager<boolean>();
export const modalEditMyProfile = new SubjectManager<boolean>();
export const modalEditPassword = new SubjectManager<boolean>();
export const modalEditPasswordError = new SubjectManager<boolean>();
export const modalImage = new SubjectManager<boolean>();
export const modalDeleteBroker = new SubjectManager<boolean>();
export const loaderImageService = new SubjectManager<boolean>();
export const sidebarService = new SubjectManager<boolean>();
export const notificationsModal = new SubjectManager<boolean>();
