import classnames from 'clsx'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

export function NewsletterForm({
  className,
  submitText = 'Submit',
}: {
  className?: string
  submitText?: string
}) {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    console.log('here')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={classnames('newsletter-form is-revealing md:flex', className)}
    >
      <div className="control">
        <button
          className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-200 to-secondary-200 py-4 px-7 text-center font-medium leading-4 text-black no-underline shadow-lg"
          type="submit"
        >
          {submitText}
        </button>
      </div>
    </form>
  )
}
