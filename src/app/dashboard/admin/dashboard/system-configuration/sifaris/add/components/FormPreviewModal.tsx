import React from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import type { PreviewModalProps, InputGroup, CreateSifarisForm, Field } from '../types'
import { Modal } from '@/components/Modal'
import TextField from '@/components/PreviewInputFields/TextField';
import NumberField from '@/components/PreviewInputFields/NumberField';
import EmailField from '@/components/PreviewInputFields/EmailField';
import DateField from '@/components/PreviewInputFields/DateField';

// renders input field
export function renderField([name, fieldAttribute]: [string, Field]) {
  if (fieldAttribute.type === "text") {
    return (
      <TextField
        fieldAttribute={fieldAttribute}
        name={name}
      />
    );
  }

  if (fieldAttribute.type === "number") {
    return (
      <NumberField
        fieldAttribute={fieldAttribute}
        name={name}
      />
    );
  }

  if (fieldAttribute.type === "email") {
    return (
      <EmailField
        fieldAttribute={fieldAttribute}
        name={name}
      />
    );
  }

  if (fieldAttribute.type === "date") {
    return (
      <DateField
        fieldAttribute={fieldAttribute}
        name={name}
      />
    );
  }
  return <div>Unknown Type</div>;
}


const FormPreviewModal = ({ isOpen, onClose }: PreviewModalProps) => {
  const sifarisForm = useFormContext<CreateSifarisForm>()

  const formPreviewData = sifarisForm.watch();
  console.log('form preiew data: ', formPreviewData);



  const previewModalForm = useForm()

  return (
    <Modal className="max-w-6xl w-full" isOpen={isOpen} onClose={onClose}>
      <FormProvider {...previewModalForm}>
        <form className='relative' onSubmit={previewModalForm.handleSubmit((data) => alert(JSON.stringify(data)))}>
          <div className="absolute top-2 right-2 cursor-pointer" onClick={(e) => {
            e.preventDefault();
            onClose();
            previewModalForm.reset()
          }}><span>X</span></div>
          <div><h1 className="font-bold text-3xl">{formPreviewData.formName}</h1></div>
          <div className="flex flex-col gap-8">
            {
              formPreviewData.inputGroups.map((inputGroup, inputGroupIndex) => {

                // rendering group
                return <fieldset key={inputGroupIndex} className={`${inputGroup.groupName ? "border-2" : ""} px-2 pt-2 pb-4 rounded-lg `}>
                  <legend className="text-xl font-semibold capitalize">{inputGroup.groupName}</legend>
                  {/* rendering column */}
                  {
                    inputGroup.inputRows.map((inputRow, inputRowIndex) => {
                      return <div key={inputRowIndex}
                        style={{
                          display: "grid",
                          gridTemplateColumns: `repeat(${inputRow.inputfields.length}, 1fr)`,
                          gap: "1.5rem",
                        }}
                      >
                        {
                          Array.isArray(inputRow.inputfields)
                            ? inputRow.inputfields
                              .map((field) => {
                                return [field.name, field] as [string, Field];
                              }).map(([name, fieldAttribute], fieldIndex) => {
                                return (
                                  <div
                                    key={fieldAttribute.id}
                                    className="flex items-center gap-4"
                                  >
                                    <div className="flex-1">
                                      {renderField([name, fieldAttribute])}
                                    </div>
                                  </div>
                                );
                              })

                            // .map(renderField)
                            // this part is not required here but need for a library build 
                            : Object.entries(inputRow.inputfields).map(renderField)
                        }
                      </div>
                    })
                  }

                </fieldset>
              })
            }
          </div>
          <div className="mt-4 flex justify-end items-center"><button className="px-2 py-3 border border-blue-950 rounded-lg">Submit</button></div>
        </form>
      </FormProvider>
    </Modal>
  )
}

export default FormPreviewModal
