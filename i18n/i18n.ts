import i18n from "i18next";
import {initReactI18next} from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)

export const Messages = {
    mailSent: 'mail-sand',
    difficulties: 'difficulties',
    job: 'job',
    usedStack: 'used-stack',
    submit: 'submit',
    home: 'home',
    yourMessage: 'your-message',
    yourEmail: 'your-email',
    yourName: 'your-name',
    contact: "contact",
    availableNow: "available-now",
    notAvailable: "not available",
    favourite: "favourite",
    exp: "exp",
    welcome: "welcome",
    login: "login",
    logout: "logout",
    french: "french",
    english: "english",
    projects: "projects",
    stack: "stack",
};

export const fr = {
    translation: {
        [Messages.mailSent]: "Votre message vient d'être envoyé",
        [Messages.usedStack]: 'La stack utilisé',
        [Messages.job] : 'Mon rôle',
        [Messages.difficulties]: 'Les challenges',
        [Messages.home]: 'Accueil',
        [Messages.submit]: 'Soumettre',
        [Messages.yourName]: "Votre nom",
        [Messages.yourEmail]: "Votre email",
        [Messages.yourMessage]: "Écrivez moi",
        [Messages.contact]: "Contact",
        [Messages.availableNow]: "Disponible immédiatement",
        [Messages.notAvailable]: "Disponible prochainement",
        [Messages.exp]: "Junior",
        [Messages.favourite]: "Go / grpc / React...",
        [Messages.stack]: "Ma stack",
        [Messages.projects]: "Mes dernières expériences",
        [Messages.welcome]: "Devellopeur FullStack",
        [Messages.login]: "Connexion",
        [Messages.logout]: "Deconnexion",
        [Messages.french]: "Français",
        [Messages.english]: "Anglais",
    }
};
const us = {
    translation: {
        [Messages.mailSent]: "Your message has been sent",
        [Messages.usedStack]: 'Stack used',
        [Messages.job] : 'My job',
        [Messages.difficulties]: 'Difficulties',
        [Messages.home]: 'Home',
        [Messages.submit]: 'Submit',
        [Messages.yourName]: "Your name",
        [Messages.yourEmail]: "Your email",
        [Messages.yourMessage]: "Write a message",
        [Messages.contact]: "Contact",
        [Messages.availableNow]: "Available immediately",
        [Messages.notAvailable]: "Available soon",
        [Messages.exp]: "Junior",
        [Messages.favourite]: "Go / grpc / React...",
        [Messages.stack]: "My stack",
        [Messages.projects]: "My last projects",
        [Messages.welcome]: "FullStack developer",
        [Messages.login]: "Login",
        [Messages.logout]: "Logout",
        [Messages.french]: "French",
        [Messages.english]: "English",
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {us, fr},
        lng: "fr",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;