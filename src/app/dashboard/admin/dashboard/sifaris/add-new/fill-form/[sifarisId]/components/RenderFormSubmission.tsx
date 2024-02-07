import { renderField } from '@/app/dashboard/admin/dashboard/system-configuration/sifaris/add/components/FormPreviewModal'
import { CreateSifarisForm, Field } from '@/app/dashboard/admin/dashboard/system-configuration/sifaris/add/types'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

const RenderFormSubmission = ({ formData }: { formData: CreateSifarisForm }) => {
  const sifarisFormSubmission = useForm<CreateSifarisForm>()

  return (
    <div>
      <>
        <FormProvider {...sifarisFormSubmission}>
          <form className='relative' onSubmit={sifarisFormSubmission.handleSubmit((data) => alert(JSON.stringify(data)))}>

            {/* // FORM TITLE  */}
            <div>
              <h1 className="font-bold text-3xl">{formData.formName}</h1>
            </div>

            <div className="flex flex-col gap-8">
              {
                formData.inputGroups.map((inputGroup, inputGroupIndex) => {

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
      </>
    </div>
  )
}

export default RenderFormSubmission