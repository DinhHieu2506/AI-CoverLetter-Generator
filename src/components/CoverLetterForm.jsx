import React from 'react';
import { Input, Button, Select } from 'antd';

const { TextArea } = Input;

export default function CoverLetterForm() {
  return (
    <div className="w-[320px] bg-gray-100 p-4 text-sm flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Your information</h2>

      {/* Base Info */}
      <div>
        <p className="font-medium mb-2">Base info</p>
        <div className="flex flex-col gap-2">
          <Input placeholder="Full name" />
          <Input placeholder="Address" />
          <Input placeholder="Email" />
          <Input placeholder="Education" />
          <div className="flex gap-2">
            <Input placeholder="Sex" />
            <Input placeholder="Phone" />
          </div>
        </div>
      </div>

      {/* Application */}
      <div>
        <p className="font-medium mb-2">Applycation</p>
        <div className="flex flex-col gap-2">
          <Input placeholder="Company Name" />
          <Input placeholder="Position" />
          <Input placeholder="Motivation to apply for" />
          <Input placeholder="I kno this recruitment form" />
        </div>
      </div>

      {/* Experience */}
      <div>
        <p className="font-medium mb-2">Experience</p>
        <TextArea rows={4} />
      </div>

      {/* Tone selector */}
      <Select
        defaultValue="formal"
        className="w-full"
        options={[
          { value: 'formal', label: 'Tone the letter ▼' },
          { value: 'friendly', label: 'Friendly' },
          { value: 'concise', label: 'Concise' },
          { value: 'enthusiastic', label: 'Enthusiastic' },
        ]}
      />

      {/* Generate button */}
      <Button type="primary" block className="bg-blue-600 hover:bg-blue-700">
        Generate
      </Button>
    </div>
  );
}
