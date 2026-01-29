import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(4, "Мінімум 4 символи").required("Обовʼязкове поле"),
  email: Yup.string().email("Неправильний формат електронної пошти").required("Обовʼязкове поле"),
  phone: Yup.string().matches(/^\+380\d{9}$/, "Формат: +380XXXXXXXXX").required("Обовʼязкове поле"),
  message: Yup.string().min(10, "Мінімум 10 символів").required("Обовʼязкове поле"),
  subscribe: Yup.boolean()
});

export default function ContactForm() {
  return (
    <div className="contact-wrapper">
      <h2 className="title">Звʼязатися з нами</h2>
      <p className="subtitle">Залиш нам повідомлення, а ми відповімо якнайшвидше</p>

      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "", subscribe: false }}
        validationSchema={ContactSchema}
        onSubmit={(values, { resetForm }) => {
          alert("💜 Повідомлення успішно надіслано!");
          resetForm();
        }}
      >
        {() => (
          <Form className="form">

            <div className="field-block">
              <label>Імʼя та прізвище</label>
              <Field name="name" className="input" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="field-block">
              <label>Email</label>
              <Field name="email" type="email" className="input" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="field-block">
              <label>Телефон (+380)</label>
              <Field name="phone" placeholder="+380..." className="input" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div className="field-block">
              <label>Повідомлення</label>
              <Field name="message" as="textarea" rows="4" className="input textarea" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <label className="checkbox">
              <Field type="checkbox" name="subscribe" />
              Надсилати мені оновлення про академію
            </label>

            <button type="submit" className="btn">Надіслати</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

