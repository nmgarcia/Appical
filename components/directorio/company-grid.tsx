"use client";

import { Text, Loader } from "@mantine/core";
import CompanyCard from "./company-card";
import type { Company } from "@/data/companies";

interface CompanyGridProps {
  companies: Company[];
  onViewProfile: (companyId: string) => void;
  searchTerm: string;
  loading?: boolean;
}

export default function CompanyGrid({
  companies,
  onViewProfile,
  searchTerm,
  loading = false,
}: CompanyGridProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader color="green" />
      </div>
    );
  }

  if (companies.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg border border-gray-200 shadow-sm">
        <Text size="lg" color="dimmed">
          {searchTerm
            ? `No se encontraron empresas que coincidan con "${searchTerm}"`
            : "No se encontraron empresas con los filtros seleccionados"}
        </Text>
        <Text size="sm" color="dimmed" mt={2}>
          Intenta con otros términos de búsqueda o ajusta los filtros
        </Text>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {companies.map((company) => (
        <CompanyCard
          key={company.id}
          company={company}
          onViewProfile={() => onViewProfile(company.id)}
        />
      ))}
    </div>
  );
}
