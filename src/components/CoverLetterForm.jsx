import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Select, Form, Row, Col } from "antd";
import useCoverLetterStore from "../store/useCoverLetterStore";
import useGenerateCoverLetter from "../hooks/useGenerateCoverLetter";

const { TextArea } = Input;

export default function CoverLetterForm() {
  const { setLetter } = useCoverLetterStore();
  const { generateCoverLetter, loading } = useGenerateCoverLetter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      address: "",
      education: "",
      company: "",
      position: "",
      reason: "",
      reference: "",
      experience: "",
      tone: "",
    },
  });

  const getValidate = (name) => ({
    validateStatus: errors[name] ? "error" : "",
    help: errors[name]?.message,
  });

  const onSubmit = async (data) => {
   const prompt = `
You are a professional career coach and expert copywriter.

Write a fully finished, polished ${data.tone} cover letter for the position of ${data.position} at ${data.company}.

The applicant details are:
- Name: ${data.fullName}
- Email: ${data.email}
- Gender: ${data.gender}
- Phone: ${data.phone}
- Address: ${data.address}
- Reference: ${data.reference}
- Education: ${data.education}
- Key experiences & skills: ${data.experience}
- Motivation: ${data.reason}

Instructions:
- Use ONLY the actual details above. Do NOT use any placeholder text (like [Name], [Company], etc.) — always use the real input.
- Start with a header including the applicant's name, email, phone, address, and today’s date.
- Then write a personalized greeting (e.g., "Dear Hiring Manager,").
- Follow with an opening paragraph that introduces ${data.fullName} and expresses interest in the ${data.position} role.
- In the body paragraphs, highlight their education (${data.education}), emphasize key experiences and skills (${data.experience}), and clearly demonstrate why they are an excellent fit for ${data.company}.
- Include a paragraph discussing their motivation: "${data.reason}", connecting it to personal values and long-term career goals.
- Conclude with a strong closing paragraph showing enthusiasm for an interview and gratitude for the opportunity.
- End with a professional sign-off like "Sincerely" or "Best regards".

Important:
- The letter must be completely finalized with NO placeholders, brackets, or instructions left inside.
- All fields must be filled with the user's real input. If a field is empty, omit it from the letter.
- Keep it concise (under one page), professional, and error-free.

ONLY output the final cover letter — no notes or extra explanations.
`;



    const result = await generateCoverLetter(prompt);
    if (result) {
      setLetter(result);
    }
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div>
        <h2 className="text-xl font-semibold mb-3">Personal Info</h2>
        <Form.Item {...getValidate("fullName")}>
          <Controller
            name="fullName"
            control={control}
            rules={{
              required: "Full Name is required",
              setValueAs: (v) => v.trim(),
            }}
            render={({ field }) => <Input {...field} placeholder="Full Name" />}
          />
        </Form.Item>

        <Form.Item {...getValidate("email")}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              setValueAs: (v) => v.trim(),
            }}
            render={({ field }) => <Input {...field} placeholder="Email" />}
          />
        </Form.Item>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item {...getValidate("phone")}>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: "Phone is required",
                  setValueAs: (v) => v.trim(),
                }}
                render={({ field }) => <Input {...field} placeholder="Phone" />}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item {...getValidate("gender")}>
              <Controller
                name="gender"
                control={control}
                rules={{
                  required: "Gender is required",
                  setValueAs: (v) => v.trim(),
                }}
                render={({ field }) => (
                  <Select
                    placeholder="Gender"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                  >
                    <Select.Option value="Male">Male</Select.Option>
                    <Select.Option value="Female">Female</Select.Option>
                    <Select.Option value="Other">Other</Select.Option>
                  </Select>
                )}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item {...getValidate("address")}>
          <Controller
            name="address"
            control={control}
            rules={{
              required: "Address is required",
              setValueAs: (v) => v.trim(),
            }}
            render={({ field }) => <Input {...field} placeholder="Address" />}
          />
        </Form.Item>

        <Form.Item {...getValidate("education")}>
          <Controller
            name="education"
            control={control}
            rules={{
              required: "Education is required",
              setValueAs: (v) => v.trim(),
            }}
            render={({ field }) => <Input {...field} placeholder="Education" />}
          />
        </Form.Item>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Job Info</h2>
        <Form.Item {...getValidate("company")}>
          <Controller
            name="company"
            control={control}
            rules={{
              required: "Company is required",
              setValueAs: (v) => v.trim(),
            }}
            render={({ field }) => (
              <Input {...field} placeholder="Company Name" />
            )}
          />
        </Form.Item>

        <Form.Item {...getValidate("position")}>
          <Controller
            name="position"
            control={control}
            rules={{
              required: "Position is required",
              setValueAs: (v) => v.trim(),
            }}
            render={({ field }) => <Input {...field} placeholder="Position" />}
          />
        </Form.Item>

        <Form.Item {...getValidate("reason")}>
          <Controller
            name="reason"
            control={control}
            rules={{
              required: "Reason is required",
              setValueAs: (v) => v.trim(),
            }}
            render={({ field }) => (
              <Input {...field} placeholder="Why you want to apply" />
            )}
          />
        </Form.Item>
      </div>

            <div>
      <Form.Item {...getValidate("reference")}>
          <Controller
            name="reference"
            control={control}
            rules={{
              required: "Reference is required",
              setValueAs: (v) => v.trim(),
            }}
            render={({ field }) => (
              <Input {...field} placeholder="I know  this recruitment from... " />
            )}
          />
        </Form.Item>
      </div>


      <div>
        <h2 className="text-xl font-semibold mb-3">Experience</h2>
        <Form.Item {...getValidate("experience")}>
          <Controller
            name="experience"
            control={control}
            rules={{
              required: "Experience is required",
              setValueAs: (v) => v.trim(),
            }}
            render={({ field }) => (
              <TextArea
                {...field}
                rows={4}
                placeholder="Your key experience / skills"
              />
            )}
          />
        </Form.Item>
      </div>

      <Form.Item label="Tone" {...getValidate("tone")}>
        <Controller
          name="tone"
          control={control}
          rules={{
            required: "Tone is required",
            setValueAs: (v) => v.trim(),
          }}
          render={({ field }) => (
            <Select
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            >
              <Select.Option value="Formal">Formal</Select.Option>
              <Select.Option value="Friendly">Friendly</Select.Option>
              <Select.Option value="Confident">Confident</Select.Option>
            </Select>
          )}
        />
      </Form.Item>

      <Button type="primary" htmlType="submit" block loading={loading}>
        Generate Cover Letter
      </Button>
    </Form>
  );
}
