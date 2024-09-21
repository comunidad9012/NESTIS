import { createLazyFileRoute } from '@tanstack/react-router'
import Registro from '../pages/Register'
export const Route = createLazyFileRoute('/registro')({
  component:Registro, 
})