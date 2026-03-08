"use client";

import { type FormEvent, useMemo, useState } from "react";

import { CONTACT_PAGE, SITE } from "@/lib/constants";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

type FormData = {
  organization: string;
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  detail: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  organization: "",
  name: "",
  email: "",
  phone: "",
  inquiryType: "",
  detail: "",
  consent: false
};

function validateEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const validateField = (name: keyof FormData, value: string | boolean) => {
    switch (name) {
      case "name":
        return String(value).trim() ? "" : CONTACT_PAGE.validation.nameRequired;
      case "email":
        if (!String(value).trim()) {
          return CONTACT_PAGE.validation.emailRequired;
        }
        return validateEmail(String(value)) ? "" : CONTACT_PAGE.validation.emailInvalid;
      case "inquiryType":
        return String(value).trim() ? "" : CONTACT_PAGE.validation.inquiryRequired;
      case "detail":
        return String(value).trim() ? "" : CONTACT_PAGE.validation.detailRequired;
      case "consent":
        return Boolean(value) ? "" : CONTACT_PAGE.validation.consentRequired;
      default:
        return "";
    }
  };

  const runFullValidation = () => {
    const nextErrors: Errors = {};

    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        nextErrors[key] = error;
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const updateField = (name: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (name: keyof FormData) => {
    const error = validateField(name, formData[name]);
    setErrors((prev) => {
      const next = { ...prev };
      if (error) {
        next[name] = error;
      } else {
        delete next[name];
      }
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!runFullValidation()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error("Failed to submit");
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 900));
      }

      setShowSuccess(true);
      setFormData(initialData);
      setErrors({});
    } catch {
      setErrors((prev) => ({ ...prev, detail: CONTACT_PAGE.submitError }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-spacing bg-white">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <h2 className="text-2xl font-bold text-navy-800">{CONTACT_PAGE.formTitle}</h2>
          <form className="mt-8 space-y-5" noValidate onSubmit={handleSubmit}>
            <div>
              <label htmlFor="organization" className="mb-2 block text-sm text-navy-700">
                {CONTACT_PAGE.formFields.organization}
              </label>
              <Input
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={(event) => updateField("organization", event.target.value)}
                onBlur={() => handleBlur("organization")}
              />
            </div>

            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-navy-700">
                {CONTACT_PAGE.formFields.name}
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                onBlur={() => handleBlur("name")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-navy-700">
                {CONTACT_PAGE.formFields.email}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                onBlur={() => handleBlur("email")}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm text-navy-700">
                {CONTACT_PAGE.formFields.phone}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                onBlur={() => handleBlur("phone")}
              />
            </div>

            <div>
              <label htmlFor="inquiryType" className="mb-2 block text-sm text-navy-700">
                {CONTACT_PAGE.formFields.inquiryType}
              </label>
              <Select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={(event) => updateField("inquiryType", event.target.value)}
                onBlur={() => handleBlur("inquiryType")}
                aria-invalid={Boolean(errors.inquiryType)}
                aria-describedby={errors.inquiryType ? "inquiryType-error" : undefined}
              >
                <option value="">{CONTACT_PAGE.selectPlaceholder}</option>
                {CONTACT_PAGE.inquiryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
              {errors.inquiryType ? (
                <p id="inquiryType-error" className="mt-1 text-xs text-red-600">
                  {errors.inquiryType}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="detail" className="mb-2 block text-sm text-navy-700">
                {CONTACT_PAGE.formFields.detail}
              </label>
              <Textarea
                id="detail"
                name="detail"
                rows={6}
                value={formData.detail}
                onChange={(event) => updateField("detail", event.target.value)}
                onBlur={() => handleBlur("detail")}
                aria-invalid={Boolean(errors.detail)}
                aria-describedby={errors.detail ? "detail-error" : undefined}
              />
              {errors.detail ? <p id="detail-error" className="mt-1 text-xs text-red-600">{errors.detail}</p> : null}
            </div>

            <div>
              <label className="flex items-start gap-3 text-sm text-navy-700" htmlFor="consent">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(event) => updateField("consent", event.target.checked)}
                  onBlur={() => handleBlur("consent")}
                  className="mt-1 h-4 w-4 rounded border-grayx-200 text-teal-500"
                />
                <span>{CONTACT_PAGE.formFields.consent}</span>
              </label>
              {errors.consent ? <p className="mt-1 text-xs text-red-600">{errors.consent}</p> : null}
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || hasErrors}>
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <LoadingSpinner />
                  {CONTACT_PAGE.sendingLabel}
                </span>
              ) : (
                CONTACT_PAGE.submitLabel
              )}
            </Button>
          </form>
        </Card>

        <div className="space-y-6">
          <Card>
            <h3 className="text-xl font-bold text-navy-800">{CONTACT_PAGE.infoTitle}</h3>
            <ul className="mt-5 space-y-3 text-sm text-grayx-600">
              <li>
                メール: <a href={`mailto:${SITE.contactEmail}`} className="text-teal-500">{SITE.contactEmail}</a>
              </li>
              <li>
                電話: <a href={`tel:${SITE.contactPhone}`} className="text-teal-500">{SITE.contactPhone}</a>
              </li>
              <li>受付時間: {SITE.businessHours}</li>
            </ul>
          </Card>

          <Card className="overflow-hidden p-0">
            <div className="aspect-[16/11] bg-grayx-100">
              <div className="flex h-full items-center justify-center font-english text-xs uppercase tracking-[0.14em] text-grayx-400">
                {CONTACT_PAGE.mapPlaceholder}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {showSuccess ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-navy-950/70 p-5" role="dialog" aria-modal="true">
          <div className="w-full max-w-md rounded-2xl bg-white p-7 text-center">
            <h4 className="text-xl font-bold text-navy-800">{CONTACT_PAGE.successTitle}</h4>
            <p className="mt-3 text-sm leading-7 text-grayx-600">{CONTACT_PAGE.successDescription}</p>
            <Button className="mt-6" onClick={() => setShowSuccess(false)}>
              {CONTACT_PAGE.closeLabel}
            </Button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
