"use client";

import { useState, type FormEvent } from "react";
import { SectionWrapper } from "./section-wrapper";
import { AnimateOnScroll } from "./animate-on-scroll";
import { Toast } from "./toast";
import { WHATSAPP_URL } from "@/lib/data";

type ProjectType = "tienda" | "sistema" | "saas" | "inmo" | "otro";

interface FormData {
  name: string;
  projectType: ProjectType | "";
  message: string;
}

interface FormErrors {
  name?: string;
  projectType?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [toastMessage, setToastMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    if (!formData.projectType) {
      newErrors.projectType = "Seleccioná un tipo de proyecto";
    }
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Enviar a Formspree
      const response = await fetch("https://formspree.io/f/xnnevjdg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setToastType("success");
        setToastMessage("Mensaje enviado correctamente. Te respondo pronto!");
        setShowToast(true);
        setFormData({ name: "", projectType: "", message: "" });
        setErrors({});
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error:", error);
      setToastType("error");
      setToastMessage(
        "Hubo un error al enviar el mensaje. Por favor, intentá de nuevo."
      );
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper
      id="contacto"
      className="bg-primary text-primary-foreground"
    >
      <AnimateOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Querés ver algo así aplicado a tu negocio?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Contame qué vendés o qué proceso querés digitalizar. Sin compromiso,
            charlemos para ver cómo puedo ayudarte.
          </p>

          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-background px-8 py-4 text-lg font-semibold text-foreground transition-all hover:scale-105 hover:shadow-lg"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Hablar por WhatsApp
          </a>

          {/* Divider */}
          <div className="my-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-primary-foreground/20" />
            <span className="text-sm text-primary-foreground/60">
              o dejame un mensaje
            </span>
            <div className="h-px flex-1 bg-primary-foreground/20" />
          </div>

          {/* Contact Form with validation */}
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-primary-foreground/90"
              >
                Nombre / Negocio
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                className={`w-full rounded-lg border px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-400 bg-red-500/10 focus:ring-red-400/40"
                    : "border-primary-foreground/20 bg-primary-foreground/10 focus:border-primary-foreground/40 focus:ring-primary-foreground/20"
                }`}
                placeholder="Tu nombre o el de tu negocio"
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-red-300">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="number"
                className="mb-2 block text-sm font-medium text-primary-foreground/90"
              >
                Teléfono
              </label>
              <input
                type="text"
                id="number"
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                className={`w-full rounded-lg border px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-400 bg-red-500/10 focus:ring-red-400/40"
                    : "border-primary-foreground/20 bg-primary-foreground/10 focus:border-primary-foreground/40 focus:ring-primary-foreground/20"
                }`}
                placeholder="Tu número de teléfono"
              />
              {errors.name && (
                <p className="mt-1.5 text-sm text-red-300">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="projectType"
                className="mb-2 block text-sm font-medium text-primary-foreground/90"
              >
                Tipo de proyecto
              </label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    projectType: e.target.value as ProjectType,
                  });
                  if (errors.projectType)
                    setErrors({ ...errors, projectType: undefined });
                }}
                className={`w-full rounded-lg border px-4 py-3 text-primary-foreground focus:outline-none focus:ring-2 ${
                  errors.projectType
                    ? "border-red-400 bg-red-500/10 focus:ring-red-400/40"
                    : "border-primary-foreground/20 bg-primary-foreground/10 focus:border-primary-foreground/40 focus:ring-primary-foreground/20"
                }`}
              >
                <option value="" className="text-foreground">
                  Seleccioná una opción
                </option>
                <option value="tienda" className="text-foreground">
                  Tienda online
                </option>
                <option value="sistema" className="text-foreground">
                  Sistema interno
                </option>
                <option value="saas" className="text-foreground">
                  SaaS
                </option>
                <option value="inmo" className="text-foreground">
                  Inmobiliaria
                </option>
                <option value="otro" className="text-foreground">
                  Otro
                </option>
              </select>
              {errors.projectType && (
                <p className="mt-1.5 text-sm text-red-300">
                  {errors.projectType}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-primary-foreground/90"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message)
                    setErrors({ ...errors, message: undefined });
                }}
                rows={4}
                className={`w-full resize-none rounded-lg border px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? "border-red-400 bg-red-500/10 focus:ring-red-400/40"
                    : "border-primary-foreground/20 bg-primary-foreground/10 focus:border-primary-foreground/40 focus:ring-primary-foreground/20"
                }`}
                placeholder="Contame brevemente qué necesitás..."
              />
              {errors.message && (
                <p className="mt-1.5 text-sm text-red-300">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-all hover:bg-accent/90 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </AnimateOnScroll>

      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </SectionWrapper>
  );
}
