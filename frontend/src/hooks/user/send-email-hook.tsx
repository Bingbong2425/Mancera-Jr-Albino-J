import { useState } from "react";
import SendEmail from "../../services/user/send-email";
import { recoverytype } from "../../types/recover-type";
const SendEmailHook = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleSendEmail = async (email: recoverytype) => {
    setLoading(true);

    try {
      await SendEmail(email);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { handleSendEmail, loading };
};

export default SendEmailHook;
