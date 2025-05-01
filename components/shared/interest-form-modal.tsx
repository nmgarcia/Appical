"use client";

import { useState, useEffect } from "react";
import {
  Modal,
  TextInput,
  Textarea,
  Button,
  Group,
  MultiSelect,
  LoadingOverlay,
  Alert,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Check, AlertCircle } from "lucide-react";
import {
  interesadosService,
  type InteresadoFormData,
} from "@/services/interesadosService";
import { capacitacionesService } from "@/services/capacitacionesService";
import type { Capacitacion } from "@/data/capacitaciones";

interface InterestFormModalProps {
  opened: boolean;
  onClose: () => void;
  title: string;
  origen: "capacitaciones" | "directorio" | "licitaciones";
  capacitacionId?: string; // ID de la capacitación específica (opcional)
  showCapacitacionesSelect?: boolean; // Mostrar selector de capacitaciones
}

export default function InterestFormModal({
  opened,
  onClose,
  title,
  origen,
  capacitacionId,
  showCapacitacionesSelect = false,
}: InterestFormModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [capacitaciones, setCapacitaciones] = useState<Capacitacion[]>([]);

  const form = useForm({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
      empresa: "",
      mensaje: "",
      capacitacionesIds: capacitacionId ? [capacitacionId] : [],
    },
    validate: {
      nombre: (value) =>
        value.length < 2 ? "El nombre debe tener al menos 2 caracteres" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
      telefono: (value) =>
        /^\+?[0-9]{8,}$/.test(value) ? null : "Teléfono inválido",
    },
  });

  // Cargar capacitaciones para el selector
  useEffect(() => {
    if (showCapacitacionesSelect) {
      const loadCapacitaciones = async () => {
        try {
          const data = await capacitacionesService.getCapacitaciones();
          setCapacitaciones(data);
        } catch (err) {
          console.error("Error al cargar capacitaciones:", err);
        }
      };
      loadCapacitaciones();
    }
  }, [showCapacitacionesSelect]);

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    setError(null);

    try {
      const formData: InteresadoFormData = {
        nombre: values.nombre,
        email: values.email,
        telefono: values.telefono,
        empresa: values.empresa || undefined,
        mensaje: values.mensaje || undefined,
        origen,
        capacitacionesIds:
          values.capacitacionesIds.length > 0
            ? values.capacitacionesIds
            : undefined,
      };

      const response = await interesadosService.registrarInteresado(formData);

      if (response.success) {
        setSuccess(true);
        form.reset();
      } else {
        setError(
          response.message ||
            "Ha ocurrido un error. Por favor, intenta nuevamente."
        );
      }
    } catch (err) {
      console.error("Error al enviar formulario:", err);
      setError("Ha ocurrido un error. Por favor, intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setSuccess(false);
      setError(null);
      form.reset();
      onClose();
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title={title}
      size="md"
      centered
    >
      <LoadingOverlay visible={loading} />

      {success ? (
        <Alert
          icon={<Check size={16} />}
          title="¡Formulario enviado!"
          color="green"
          mb="md"
        >
          Muchas gracias, te enviaremos más información a la brevedad.
        </Alert>
      ) : (
        <form onSubmit={form.onSubmit(handleSubmit)}>
          {error && (
            <Alert
              icon={<AlertCircle size={16} />}
              title="Error"
              color="red"
              mb="md"
            >
              {error}
            </Alert>
          )}

          <TextInput
            label="Nombre completo"
            placeholder="Juan Pérez"
            required
            {...form.getInputProps("nombre")}
            mb="md"
          />

          <TextInput
            label="Email"
            placeholder="ejemplo@correo.com"
            required
            {...form.getInputProps("email")}
            mb="md"
          />

          <TextInput
            label="Teléfono"
            placeholder="+54 9 11 1234 5678"
            required
            {...form.getInputProps("telefono")}
            mb="md"
          />

          <TextInput
            label="Empresa (opcional)"
            placeholder="Nombre de tu empresa"
            {...form.getInputProps("empresa")}
            mb="md"
          />

          {showCapacitacionesSelect && (
            <MultiSelect
              label="Capacitaciones de interés"
              placeholder="Selecciona las capacitaciones que te interesan"
              data={capacitaciones.map((cap) => ({
                value: cap.id,
                label: cap.titulo,
              }))}
              {...form.getInputProps("capacitacionesIds")}
              mb="md"
              searchable
              clearable
            />
          )}

          {/* <Textarea
            label="Mensaje (opcional)"
            placeholder="Escribe tu consulta o comentario"
            {...form.getInputProps("mensaje")}
            mb="xl"
            minRows={3}
          /> */}

          <Group align="right">
            <Button variant="outline" onClick={handleClose} disabled={loading}>
              Cancelar
            </Button>
            <Button type="submit" color="green" loading={loading}>
              Enviar
            </Button>
          </Group>
        </form>
      )}
    </Modal>
  );
}
