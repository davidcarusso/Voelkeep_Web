/**
 * ============================================
 * ICONOS CENTRALIZADOS - VOELKEEP
 * ============================================
 * 
 * Archivo central para todos los iconos usados en la aplicación.
 * Usamos Lucide React Icons por su diseño moderno y profesional.
 */

// Iconos de Lucide (modernos y profesionales)
import {
  Sparkles,
  Droplets,
  Palette,
  Zap,
  Target,
  Heart,
  Star,
  Award,
  ShoppingBag,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  ChevronUp,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Check,
  AlertCircle,
  Ruler,
  Activity,
  Waves,
  Users,
  Microscope,
  Scissors,
  PenTool,
  Wind,
  Smile,
  Leaf,
  FlaskConical,
  Flame,
  Shield,
  Gift,
  Calendar,
  MessageCircle,
  TrendingUp,
  RefreshCw,
  Lightbulb,
  BookOpen,
  FileText,
  Settings,
  Home,
  UserCheck,
  Trophy,
  Sun,
  Gem,
  Flower2,
  Wrench,
  DollarSign,
  School,
  TrendingDown,
  CircleDot,
  Feather,
  Beaker,
  Package,
  HelpCircle,
  CreditCard,
  User,
  HeartPulse,
  Clipboard,
} from 'lucide-react';

// Exportar iconos por categoría
export const Icons = {
  // Tratamientos Faciales
  limpieza: Sparkles,
  peeling: Palette,
  dermaplaning: Scissors,
  microneedling: PenTool,
  radiofrecuencia: Zap,
  hidralips: Droplets,
  glossPeel: Star,
  
  // Tratamientos Corporales
  reductores: Ruler,
  reafirmantes: Activity,
  anticeluliticos: Waves,
  waves: Waves,
  
  // Asesoramiento
  asesoramiento: Target,
  diagnostico: FlaskConical,
  rutina: BookOpen,
  
  // Beneficios Generales
  resultados: TrendingUp,
  profesional: Award,
  productos: ShoppingBag,
  calidad: Shield,
  natural: Leaf,
  ciencia: Microscope,
  innovacion: Lightbulb,
  personalizacion: Users,
  magistral: FlaskConical,
  atencion: UserCheck,
  tratamiento: Heart,
  comprobados: Trophy,
  
  // Beneficios Específicos
  renovacion: RefreshCw,
  brillo: Sparkles,
  hidratacion: Droplets,
  verano: Sun,
  diamante: Gem,
  flor: Flower2,
  herramienta: Wrench,
  dinero: DollarSign,
  aprendizaje: School,
  reduccion: TrendingDown,
  precision: CircleDot,
  suave: Feather,
  formula: Beaker,
  empaque: Package,
  fuerza: Activity,
  
  // Contacto y Navegación
  phone: Phone,
  mail: Mail,
  location: MapPin,
  clock: Clock,
  instagram: Instagram,
  message: MessageCircle,
  messageCircle: MessageCircle,
  calendar: Calendar,
  home: Home,
  
  // UI
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  menu: Menu,
  close: X,
  arrowRight: ArrowRight,
  check: Check,
  alert: AlertCircle,
  helpCircle: HelpCircle,
  user: User,
  
  // Otros
  gift: Gift,
  heart: Heart,
  refresh: RefreshCw,
  settings: Settings,
  document: FileText,
  sparkle: Sparkles,
  target: Target,
  star: Star,
  shield: Shield,
  creditCard: CreditCard,
  heartPulse: HeartPulse,
  clipboard: Clipboard,
  labios: Smile,
  relajacion: Flower2,
};

// Componente wrapper para iconos con tamaño y color consistente
export const Icon = ({ 
  icon: IconComponent, 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => {
  return (
    <IconComponent 
      size={size} 
      color={color}
      className={className}
      strokeWidth={1.5}
      {...props}
    />
  );
};

// Iconos específicos pre-configurados para uso rápido
export const ServiceIcons = {
  // Faciales
  LimpiezaProfunda: () => <Icon icon={Icons.limpieza} size={32} className="service-icon" />,
  PeelingFacial: () => <Icon icon={Icons.peeling} size={32} className="service-icon" />,
  Dermaplaning: () => <Icon icon={Icons.dermaplaning} size={32} className="service-icon" />,
  Microneedling: () => <Icon icon={Icons.microneedling} size={32} className="service-icon" />,
  Radiofrecuencia: () => <Icon icon={Icons.radiofrecuencia} size={32} className="service-icon" />,
  Hidralips: () => <Icon icon={Icons.hidralips} size={32} className="service-icon" />,
  GlossPeel: () => <Icon icon={Icons.glossPeel} size={32} className="service-icon" />,
  
  // Corporales
  Reductores: () => <Icon icon={Icons.reductores} size={32} className="service-icon" />,
  Reafirmantes: () => <Icon icon={Icons.reafirmantes} size={32} className="service-icon" />,
  Anticeluliticos: () => <Icon icon={Icons.anticeluliticos} size={32} className="service-icon" />,
  
  // Asesoramiento
  Asesoramiento: () => <Icon icon={Icons.asesoramiento} size={32} className="service-icon" />,
};

export default Icons;
