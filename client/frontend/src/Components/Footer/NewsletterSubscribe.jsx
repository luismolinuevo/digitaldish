import MailchimpSubscribe from "react-mailchimp-subscribe";
import Footer from './Footer';

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = process.env.PUBLIC_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <Footer
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        );
      }}
    />
  );
};

export default NewsletterSubscribe;
