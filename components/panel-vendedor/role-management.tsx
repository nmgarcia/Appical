"use client";

import { useState, useEffect } from "react";
import { Table, Button, TextInput, Group, Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import { roleService } from "@/services/roleService";
import { Role } from "@/types/role";

export default function RoleManagement() {
  const [roles, setRoles] = useState<Role[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRole, setEditingRole] = useState<any | null>(null);

  const form = useForm<Omit<Role, "_id">>({
    initialValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    loadRoles();
  }, []);

  const loadRoles = async () => {
    try {
      const data = await roleService.getRoles();
      setRoles(data);
    } catch (error) {
      console.error("Error loading roles:", error);
    }
  };

  const handleCreateRole = async (values: any) => {
    try {
      await roleService.createRole(values);
      setIsModalOpen(false);
      form.reset();
      loadRoles();
    } catch (error) {
      console.error("Error creating role:", error);
    }
  };

  const handleEditRole = (role: any) => {
    setEditingRole(role);
    form.setValues(role);
    setIsModalOpen(true);
  };

  const handleSaveEdit = async (values: any) => {
    try {
      await roleService.updateRole(editingRole._id, values);
      setIsModalOpen(false);
      setEditingRole(null);
      form.reset();
      loadRoles();
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  const handleDeleteRole = async (id: string) => {
    try {
      await roleService.deleteRole(id);
      loadRoles();
    } catch (error) {
      console.error("Error deleting role:", error);
    }
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} mb="md">
        Crear Rol
      </Button>
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {roles?.map((role: Role) => (
            <tr key={role._id}>
              <td>{role.name}</td>
              <td>{role.description}</td>
              <td>
                <Button
                  onClick={() => handleEditRole(role)}
                  variant="light"
                  size="xs"
                  mr="xs"
                >
                  Editar
                </Button>
                <Button
                  onClick={() => handleDeleteRole(role._id)}
                  variant="light"
                  color="red"
                  size="xs"
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        opened={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingRole(null);
          form.reset();
        }}
        title={editingRole ? "Editar Rol" : "Crear Rol"}
      >
        <form
          onSubmit={form.onSubmit(
            editingRole ? handleSaveEdit : handleCreateRole
          )}
        >
          <TextInput label="Nombre del rol" {...form.getInputProps("name")} />
          <TextInput
            label="Descripción"
            {...form.getInputProps("description")}
            mt="sm"
          />
          <Group mt="xl">
            <Button type="submit">{editingRole ? "Guardar" : "Crear"}</Button>
            <Button
              variant="light"
              onClick={() => {
                setIsModalOpen(false);
                setEditingRole(null);
                form.reset();
              }}
            >
              Cancelar
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  );
}
