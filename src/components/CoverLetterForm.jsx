import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Button, Select, Form, Row, Col } from "antd";
import useCoverLetterStore from "../store/useCoverLetterStore";
import useGenerateCoverLetter from "../hooks/useGenerateCoverLetter";

const { TextArea } = Input;

export default function CoverLetterForm() {
  const { setLetter, setLoading, setError } = useCoverLetterStore();
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
      tone: "Formal",
    },
  });

  const onSubmit = async (data) => {
 const prompt = `
Please write a ${data.tone} cover letter for the following applicant. 
Format it as a standard business letter with a header (name, email, phone, address), followed by a greeting, body paragraphs, and a closing.

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
        <h2 className="text-xl font-semibold mb-2">Personal Info</h2>

        <Form.Item
          validateStatus={errors.fullName ? "error" : ""}
          help={errors.fullName?.message}
        >
          <Controller
            name="fullName"
            control={control}
            rules={{ required: "Full Name is required" }}
            render={({ field }) => <Input {...field} placeholder="Full Name" />}
          />
        </Form.Item>

        <Form.Item
          validateStatus={errors.email ? "error" : ""}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field }) => <Input {...field} placeholder="Email" />}
          />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              validateStatus={errors.phone ? "error" : ""}
              help={errors.phone?.message}
            >
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone is required" }}
                render={({ field }) => <Input {...field} placeholder="Phone" />}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              validateStatus={errors.gender ? "error" : ""}
              help={errors.gender?.message}
            >
              <Controller
                name="gender"
                control={control}
                rules={{ required: "Gender is required" }}
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

        <Form.Item
          validateStatus={errors.address ? "error" : ""}
          help={errors.address?.message}
        >
          <Controller
            name="address"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field }) => <Input {...field} placeholder="Address" />}
          />
        </Form.Item>

        <Form.Item
          validateStatus={errors.education ? "error" : ""}
          help={errors.education?.message}
        >
          <Controller
            name="education"
            control={control}
            rules={{ required: "Education is required" }}
            render={({ field }) => <Input {...field} placeholder="Education" />}
          />
        </Form.Item>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Job Info</h2>

        <Form.Item
          validateStatus={errors.company ? "error" : ""}
          help={errors.company?.message}
        >
          <Controller
            name="company"
            control={control}
            rules={{ required: "Company Name is required" }}
            render={({ field }) => (
              <Input {...field} placeholder="Company Name" />
            )}
          />
        </Form.Item>

        <Form.Item
          validateStatus={errors.position ? "error" : ""}
          help={errors.position?.message}
        >
          <Controller
            name="position"
            control={control}
            rules={{ required: "Position is required" }}
            render={({ field }) => <Input {...field} placeholder="Position" />}
          />
        </Form.Item>

        <Form.Item
          validateStatus={errors.reason ? "error" : ""}
          help={errors.reason?.message}
        >
          <Controller
            name="reason"
            control={control}
            rules={{ required: "Reason for applying is required" }}
            render={({ field }) => (
              <Input {...field} placeholder="Why you want to apply" />
            )}
          />
        </Form.Item>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Experience</h2>

        <Form.Item
          validateStatus={errors.experience ? "error" : ""}
          help={errors.experience?.message}
        >
          <Controller
            name="experience"
            control={control}
            rules={{ required: "Experience is required" }}
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

      <div>
        <Form.Item
          label="Tone"
          validateStatus={errors.tone ? "error" : ""}
          help={errors.tone?.message}
        >
          <Controller
            name="tone"
            control={control}
            rules={{ required: "Tone is required" }}
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
      </div>

      <Button type="primary" htmlType="submit" block loading={loading}>
        Generate Cover Letter
      </Button>
    </Form>
  );
}
