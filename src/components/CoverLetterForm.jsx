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
      Please write a ${data.tone} cover letter for the following applicant.
      Format it as a standard cover letter, including a header (name, email,gender, phone, address)
      followed by a greeting, body paragraphs, and a closing.

      Name: ${data.fullName}
      Email: ${data.email}
      Phone: ${data.phone}
      Gender: ${data.gender}
      Address: ${data.address}
      Education: ${data.education}
      Applying for: ${data.position} at ${data.company}
      Reason for applying: ${data.reason}
      Experience: ${data.experience}

      Make sure the letter is clear, tailored to this job, and does not exceed one page.
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
                render={({ field }) => (
                  <Input {...field} placeholder="Phone" />
                )}
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
            render={({ field }) => (
              <Input {...field} placeholder="Education" />
            )}
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
            render={({ field }) => (
              <Input {...field} placeholder="Position" />
            )}
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
