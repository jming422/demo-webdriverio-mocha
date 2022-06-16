class ContactPage {
    get contactLink() {
        return $('body #contact-link');
    }

    get heading() {
        return $('.page-heading.bottom-indent');
    }

    get subjectContact() {
        return $('body #id_contact');
    }

    get message() {
        return $('body #message');
    }

    get buttonSubmitMessage() {
        return $('body #submitMessage');
    }

    get successMessage() {
        return $('.alert.alert-success');
    }

    get inputFile() {
        return $('body #fileUpload');
    }

    async goToContactPage() {
        await this.contactLink.click();
        await this.heading.waitForExist();
    }

    async sendMessage(content: {
        subject: string;
        message: string;
        file: string;
    }) {
        if (content.file) {
            await this.inputFile.setValue(
                `${process.cwd()}/files-to-upload/${content.file}`,
            );
        }

        await this.subjectContact.selectByAttribute('value', content.subject);
        await this.message.setValue(content.message);

        await this.buttonSubmitMessage.click();
    }
}

export default new ContactPage();
