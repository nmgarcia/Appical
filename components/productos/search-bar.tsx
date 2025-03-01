import { TextInput } from "@mantine/core"
import { Search } from "lucide-react"

interface SearchBarProps {
  onSearch: (term: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <TextInput
      placeholder="Buscar productos..."
      leftSection={<Search size={18} />}
      onChange={(e) => onSearch(e.target.value)}
      className="mb-4"
    />
  )
}

