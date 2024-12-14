"use client";
import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  description: Yup.string().required("هذا الحقل مطلوب"),
  questions: Yup.array(
    Yup.object({
      question: Yup.string().required("السؤال مطلوب"),
      answer: Yup.string().required("الإجابة مطلوبة"),
    })
  ).min(1, "يجب أن يكون هناك سؤال واحد على الأقل"),
});

const AutoMessages = () => {
  const initialValues = {
    description: "",
    questions: [
      { question: "", answer: "" },
      { question: "", answer: "" },
    ],
  };
  const handleSubmit = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <div className="rounded-[14px] p-5 border-[1px] border-[#E6E6E6] mt-4 h-full flex flex-col">
      {/* <h4 className="font-bold text-sm lg:text-lg text-[#414141]">
        شاشة البداية للتطبيق
      </h4> */}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched }: any) => (
          <Form>
            {/* Textarea for description */}
            <div className="flex flex-col gap-4">
              <label
                htmlFor="description"
                className="text-[#414141] text-sm lg:text-lg font-bold"
              >
                تخصيص الرسائل التلقائية
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="الرسالة التلقائية للمتجر عند بداية المحادثة"
                className="rounded-lg border border-[#E8E8E8] focus:outline-[#ccc] w-full h-28 resize-none p-4 placeholder:text-sm text-sm"
              />
            </div>
            {touched.description && errors.description && (
              <div style={{ color: "red" }}>{errors.description}</div>
            )}

            {/* Dynamic array of questions and answers */}
            <FieldArray name="questions">
              {({ remove, push }: any) => (
                <div className="flex flex-col gap-4 mt-4">
                  <h4 className="text-[#414141] text-sm lg:text-lg font-bold">
                    الأسئلة المقترحة و الأجوبة التلقائية
                  </h4>
                  <button
                    type="button"
                    className="w-full border border-dashed border-[#D0D0D0] py-4 rounded-xl text-[#323232] text-sm font-normal text-center"
                    onClick={() => push({ question: "", answer: "" })}
                  >
                    إضافة سؤال آخر
                  </button>
                  {values.questions.map((_: any, index: any) => (
                    <div key={index} style={{ marginBottom: "1rem" }}>
                      <div className="relative">
                        <Field
                          name={`questions.${index}.question`}
                          placeholder="السؤال المقترح للعميل"
                          className="rounded-lg border border-[#E8E8E8] focus:outline-[#ccc] w-full py-3 px-4 pl-16 placeholder:text-sm text-sm"
                        />

                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#CA3F3F]"
                        >
                          إلغاء
                        </button>
                      </div>
                      {touched.questions?.[index]?.question &&
                        errors.questions?.[index]?.question && (
                          <div style={{ color: "red" }}>
                            {errors.questions[index].question}
                          </div>
                        )}
                      <div>
                        <Field
                          name={`questions.${index}.answer`}
                          placeholder="الإجابة التلقائية"
                          className="rounded-lg border border-[#E8E8E8] focus:outline-[#ccc] w-full h-16 p-4 mt-4 placeholder:text-sm text-sm"
                        />
                      </div>
                      {touched.questions?.[index]?.answer &&
                        errors.questions?.[index]?.answer && (
                          <div style={{ color: "red" }}>
                            {errors.questions[index].answer}
                          </div>
                        )}
                      <hr className="mt-8"/>
                    </div>
                  ))}
                </div>
              )}
            </FieldArray>

            <button
              type="submit"
              className="text-xs font-normal py-2 px-2 lg:px-4 bg-[#F5D446] rounded-lg hover:bg-[#F5D446BC] transition-all"
            >
              إرسال
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AutoMessages;
