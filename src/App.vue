<script setup lang="ts">
import { ref, computed } from "vue";
import { 
  Compass, 
  Sparkles, 
  Globe, 
  ChevronDown, 
  Heart, 
  Users, 
  BookOpen, 
  Smile, 
  Star, 
  Calendar, 
  X, 
  Check, 
  Award, 
  ShieldCheck, 
  Camera, 
  Info, 
  Car, 
  Ticket,
  ArrowRight
} from "lucide-vue-next";
import { MATES_DATA, TESTIMONIALS_DATA, TRANSLATIONS } from "./data";
import type { Mate } from "./types";

// State
const lang = ref<"uz" | "en" | "ru">("uz");
const selectedCategory = ref<string>("all");
const activeMate = ref<Mate | null>(null);
const isLangOpen = ref(false);

const selectedAiInterest = ref<string | null>(null);
const isAiMatchedPopup = ref(false);
const aiMatchedMate = ref<Mate | null>(null);

const bookingDate = ref("");
const bookingTime = ref("");
const showTicket = ref(false);
const currentTicketCode = ref("");

// Computed core dictionary translation
const t = computed(() => TRANSLATIONS[lang.value]);

// Filter handlers
const handleCategoryFilter = (cat: string) => {
  selectedCategory.value = cat;
};

// AI Matching logic
const handleAiInterestSelect = (interestKey: string) => {
  selectedAiInterest.value = interestKey;
  let match: Mate | null = null;
  if (interestKey === "tarix") {
    match = MATES_DATA.find(m => m.id === "azizbek") || null;
  } else if (interestKey === "taomlar") {
    match = MATES_DATA.find(m => m.id === "azizbek") || null;
  } else if (interestKey === "foto") {
    match = MATES_DATA.find(m => m.id === "malika") || null;
  } else if (interestKey === "hunar") {
    match = MATES_DATA.find(m => m.id === "rustam") || null;
  }
  aiMatchedMate.value = match;
};

const triggerMatchResult = () => {
  if (!selectedAiInterest.value || !aiMatchedMate.value) {
    const defaultMatch = MATES_DATA.find(m => m.id === "malika") || MATES_DATA[0];
    aiMatchedMate.value = defaultMatch;
  }
  isAiMatchedPopup.value = true;
};

const handleOpenBooking = (mate: Mate) => {
  activeMate.value = mate;
  bookingDate.value = "";
  bookingTime.value = "";
  showTicket.value = false;
};

const submitBookingForm = () => {
  if (!bookingDate.value || !bookingTime.value) {
    alert(lang.value === "uz" ? "Iltimos sana va vaqtni tanlang!" : lang.value === "ru" ? "Пожалуйста, выберите дату и время!" : "Please choose date & time!");
    return;
  }
  const code = "SLM-" + Math.floor(1000 + Math.random() * 9000);
  currentTicketCode.value = code;
  showTicket.value = true;
};

// Dynamic Mates Filter list
const filteredMates = computed(() => {
  const cat = selectedCategory.value;
  return MATES_DATA.filter((mate) => {
    if (cat === "all") return true;
    if (cat === "tarix") return mate.specialtyKey.includes("tarix");
    if (cat === "taomlar") return mate.specialtyKey.includes("taomlar");
    if (cat === "foto") return mate.specialtyKey.includes("foto");
    if (cat === "hunar") return mate.specialtyKey.includes("hunar") || mate.specialtyKey.includes("hunarmandchilik");
    return true;
  });
});
</script>

<template>
  <div class="min-h-screen bg-stone-50 font-sans flex flex-col antialiased">
    
    <!-- Header / Navbar -->
    <header id="nav-header" class="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-stone-200/80 transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        <!-- Brand Logo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="w-10 h-10 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center text-[var(--color-primary)] group-hover:scale-105 transition-transform duration-200">
            <svg viewBox="0 0 100 100" class="w-7 h-7" fill="currentColor">
              <path d="M50 12 C35 25, 38 45, 38 48 L62 48 C62 45, 65 25, 50 12 Z" class="text-[var(--color-primary)]" fill="currentColor" />
              <path d="M50 5 Q52 10, 50 12 Q48 10, 50 5 Z" class="text-[var(--color-tertiary)]" fill="currentColor" />
              <path d="M22 52 L78 52 L78 88 L22 88 Z" class="text-[var(--color-secondary)]" fill="currentColor" />
              <path d="M40 88 L40 66 C40 54, 60 54, 60 66 L60 88 Z" fill="white" />
            </svg>
          </div>
          <div>
            <span class="font-display font-extrabold text-lg tracking-tight text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors block">Samarkand</span>
            <span class="font-mono text-[10px] uppercase tracking-widest text-[var(--color-primary)] font-bold -mt-1 block">{{ t.brand_sub }}</span>
          </div>
        </a>

        <!-- Navigation Links -->
        <nav class="hidden md:flex items-center gap-8 font-medium text-stone-600 text-sm">
          <a href="#how-it-works" class="hover:text-[var(--color-primary)] transition-colors relative py-1">{{ t.nav_how }}</a>
          <a href="#meet-mates" class="hover:text-[var(--color-primary)] transition-colors relative py-1">{{ t.nav_mates }}</a>
          <a href="#testimonials" class="hover:text-[var(--color-primary)] transition-colors relative py-1">{{ t.nav_reviews }}</a>
        </nav>

        <!-- Language Selector + CTA -->
        <div class="flex items-center gap-3">
          
          <!-- Language Dropdown -->
          <div class="relative">
            <button 
              @click="isLangOpen = !isLangOpen" 
              id="lang-dropdown-btn"
              class="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[var(--color-secondary)] hover:text-[var(--color-primary)] bg-stone-100/80 hover:bg-[var(--color-primary)]/5 rounded-xl border border-stone-200 transition-all duration-200"
            >
              <Globe class="w-3.5 h-3.5 text-stone-500" />
              <span>{{ lang === "uz" ? "O'zbekcha" : lang === "en" ? "English" : "Русский" }}</span>
              <ChevronDown class="w-3 h-3 text-stone-400" />
            </button>

            <div v-if="isLangOpen" id="lang-dropdown-menu" class="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-stone-200 py-1.5 z-50">
              <button 
                @click="lang = 'uz'; isLangOpen = false" 
                class="flex items-center justify-between w-full px-4 py-2 text-xs font-medium text-left hover:bg-stone-50 text-stone-700"
                :class="{'text-[var(--color-primary)] font-bold': lang === 'uz'}"
              >
                O'zbekcha <span v-if="lang === 'uz'" class="text-[var(--color-primary)]">✓</span>
              </button>
              <button 
                @click="lang = 'en'; isLangOpen = false" 
                class="flex items-center justify-between w-full px-4 py-2 text-xs font-medium text-left hover:bg-stone-50 text-stone-700"
                :class="{'text-[var(--color-primary)] font-bold': lang === 'en'}"
              >
                English <span v-if="lang === 'en'" class="text-[var(--color-primary)]">✓</span>
              </button>
              <button 
                @click="lang = 'ru'; isLangOpen = false" 
                class="flex items-center justify-between w-full px-4 py-2 text-xs font-medium text-left hover:bg-stone-50 text-stone-700"
                :class="{'text-[var(--color-primary)] font-bold': lang === 'ru'}"
              >
                Русский <span v-if="lang === 'ru'" class="text-[var(--color-primary)]">✓</span>
              </button>
            </div>
          </div>

          <a href="#ai-matcher" id="fast-match-btn" class="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-4 py-2 rounded-xl text-xs font-bold tracking-wide shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 animate-pulse">
            <Sparkles class="w-3.5 h-3.5 text-amber-300" />
            <span class="hidden sm:inline">{{ t.nav_cta }}</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="relative bg-white pt-8 pb-16 md:py-24 overflow-hidden border-b border-stone-200">
      
      <!-- Backdrop decorative layout -->
      <div class="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop" 
          class="w-full h-full object-cover object-center opacity-[0.14] filter scale-105" 
          alt="Samarkand Scenic Blue Tile Backdrop" 
        />
        <div class="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-stone-50"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Hero text elements -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 bg-[var(--color-secondary-light)]/45 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5 text-[var(--color-secondary)] text-xs sm:text-sm font-semibold tracking-wide">
            <Compass class="w-4 h-4 text-[var(--color-primary)]" />
            <span>{{ t.hero_tag }}</span>
          </div>
          
          <h1 class="font-display text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[var(--color-secondary)] leading-tight tracking-tight">
            {{ t.hero_title_1 }}<span class="text-[var(--color-primary)]">{{ t.hero_title_2 }}</span>{{ t.hero_title_3 }}
          </h1>
          
          <p class="text-stone-500 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            {{ t.hero_desc }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-3">
            <a href="#meet-mates" id="cta-view-mates" class="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold px-8 py-4 rounded-full text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <span>{{ t.hero_btn_primary }}</span>
              <ArrowRight class="w-4 h-4" />
            </a>
            <a href="#ai-matcher" id="cta-ai-matcher" class="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 font-bold px-8 py-4 rounded-full text-sm transition-all flex items-center justify-center gap-2">
              <Sparkles class="w-4 h-4 text-amber-500" />
              <span>{{ t.hero_btn_secondary }}</span>
            </a>
          </div>
          
          <!-- hardcoded statistic figures -->
          <div class="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0 border-t border-stone-200">
            <div>
              <p class="text-3xl font-extrabold text-[var(--color-primary)] font-display">15+</p>
              <p class="text-xs text-stone-500 font-medium">{{ t.stats_mates }}</p>
            </div>
            <div>
              <p class="text-3xl font-extrabold text-[var(--color-secondary)] font-display">4.9★</p>
              <p class="text-xs text-stone-500 font-medium">{{ t.stats_rating }}</p>
            </div>
            <div>
              <p class="text-3xl font-extrabold text-[var(--color-tertiary)] font-display">2.5k+</p>
              <p class="text-xs text-stone-500 font-medium">{{ t.stats_trips }}</p>
            </div>
          </div>
        </div>

        <!-- Hero right portrait -->
        <div class="lg:col-span-5 relative flex justify-center">
          <div class="relative w-72 sm:w-80 h-[430px] bg-white rounded-3xl p-3 shadow-lg border border-stone-100 overflow-hidden">
            
            <div class="arch-top overflow-hidden h-[80%] relative bg-stone-100">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" 
                class="w-full h-full object-cover" 
                alt="High fidelity sample guide portrait" 
              />
              
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-2xl border border-stone-200 shadow">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span class="text-xs font-bold text-[var(--color-secondary)]">Malika, 25</span>
                  </div>
                  <span class="text-[10px] bg-primary-light text-[var(--color-primary)] px-2 py-0.5 rounded-full font-bold">★ 5.0 Tour Guide</span>
                </div>
                <p class="text-[11px] text-stone-500 mt-1 italic">
                  <span v-if="lang === 'uz'">"Eski Samarqandning fotogenik va go'zal maskanlarini birgalikda kashf etamiz."</span>
                  <span v-else-if="lang === 'en'">"Let's capture the raw beauty of Samarkand's turquoise tombs together."</span>
                  <span v-else-if="lang === 'ru'">"Давайте откроем скрытую фотогеничную красоту древнего Самарканда вместе."</span>
                </p>
              </div>
            </div>

            <!-- Tile footer detail -->
            <div class="h-[20%] flex items-center justify-between px-3">
              <div class="flex gap-1">
                <span class="w-7 h-7 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-black text-[10px]">UZ</span>
                <span class="w-7 h-7 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] flex items-center justify-center font-black text-[10px]">EN</span>
                <span class="w-7 h-7 rounded-full bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] flex items-center justify-center font-black text-[10px]">DE</span>
              </div>
              <div class="text-right">
                <span class="text-[9px] text-stone-400 block uppercase tracking-wider font-semibold">Price (Rate)</span>
                <span class="text-sm font-bold text-[var(--color-secondary)] font-display">$18<span class="text-xs font-normal text-stone-500">/{{ t.card_hour }}</span></span>
              </div>
            </div>
          </div>
          
          <div class="absolute -top-4 -right-4 w-20 h-20 bg-[var(--color-tertiary-light)] rounded-full -z-10 opacity-70"></div>
          <div class="absolute -bottom-4 -left-4 w-28 h-28 bg-[var(--color-primary-light)] rounded-full -z-10 opacity-50"></div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-16 md:py-20 relative bg-white border-b border-stone-200">
      <div class="absolute inset-0 girih-pattern z-0 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="font-display text-3xl md:text-4xl font-extrabold text-[var(--color-secondary)]">{{ t.how_title }}</h2>
          <div class="h-1 w-16 bg-[var(--color-primary)] mx-auto my-4 rounded-full"></div>
          <p class="text-stone-500 text-lg font-light">{{ t.how_subtitle }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          <!-- Connecting dashed design guide line on desktop -->
          <div class="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 border-t border-dashed border-stone-200 -z-10"></div>

          <!-- Step 1 -->
          <div class="flex flex-col items-center text-center space-y-3 p-4">
            <div class="w-20 h-20 rounded-full bg-white border-2 border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] shadow-sm hover:border-[var(--color-primary)] transition-colors relative">
              <span class="absolute -top-1 -right-1 bg-[var(--color-primary)] text-white w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center">1</span>
              <Heart class="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h3 class="font-display font-bold text-lg text-[var(--color-secondary)] pt-2">{{ t.step1_title }}</h3>
            <p class="text-stone-500 text-xs sm:text-sm max-w-xs font-light leading-relaxed">{{ t.step1_desc }}</p>
          </div>

          <!-- Step 2 -->
          <div class="flex flex-col items-center text-center space-y-3 p-4">
            <div class="w-20 h-20 rounded-full bg-white border-2 border-[var(--color-tertiary)]/20 flex items-center justify-center text-[var(--color-tertiary)] shadow-sm hover:border-[var(--color-tertiary)] transition-colors relative">
              <span class="absolute -top-1 -right-1 bg-[var(--color-tertiary)] text-white w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center">2</span>
              <Users class="w-8 h-8 text-[var(--color-tertiary)]" />
            </div>
            <h3 class="font-display font-bold text-lg text-[var(--color-secondary)] pt-2">{{ t.step2_title }}</h3>
            <p class="text-stone-500 text-xs sm:text-sm max-w-xs font-light leading-relaxed">{{ t.step2_desc }}</p>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col items-center text-center space-y-3 p-4">
            <div class="w-20 h-20 rounded-full bg-white border-2 border-[var(--color-secondary)]/20 flex items-center justify-center text-[var(--color-secondary)] shadow-sm hover:border-[var(--color-secondary)] transition-colors relative">
              <span class="absolute -top-1 -right-1 bg-[var(--color-secondary)] text-white w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center">3</span>
              <Compass class="w-8 h-8 text-[var(--color-secondary)]" />
            </div>
            <h3 class="font-display font-bold text-lg text-[var(--color-secondary)] pt-2">{{ t.step3_title }}</h3>
            <p class="text-stone-500 text-xs sm:text-sm max-w-xs font-light leading-relaxed">{{ t.step3_desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet Local Mates Catalog -->
    <section id="meet-mates" class="py-16 md:py-20 bg-stone-50 border-b border-stone-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center md:text-left md:flex md:items-end justify-between mb-12">
          <div class="max-w-2xl space-y-3">
            <h2 class="font-display text-3xl font-extrabold text-[var(--color-secondary)]">{{ t.mates_title }}</h2>
            <p class="text-stone-500 text-base font-light">{{ t.mates_subtitle }}</p>
          </div>
          <button 
            @click="selectedCategory = 'all'; selectedAiInterest = null" 
            class="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-bold inline-flex items-center gap-1 text-sm pt-4 md:pt-0 transition-colors"
          >
            <span>{{ t.mates_all_link }}</span>
            <ArrowRight class="w-4 h-4" />
          </button>
        </div>

        <!-- Category Buttons selection panel -->
        <div class="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-stone-200">
          <button 
            @click="handleCategoryFilter('all')"
            class="px-4 py-2.5 rounded-full text-xs font-bold border transition-all"
            :class="selectedCategory === 'all' ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm' : 'bg-white text-stone-500 border-stone-200 hover:bg-stone-50'"
          >
            {{ t.filter_all }}
          </button>
          <button 
            @click="handleCategoryFilter('tarix')"
            class="px-4 py-2.5 rounded-full text-xs font-bold border transition-all"
            :class="selectedCategory === 'tarix' ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm' : 'bg-white text-stone-500 border-stone-200 hover:bg-stone-50'"
          >
            {{ t.filter_tarix }}
          </button>
          <button 
            @click="handleCategoryFilter('taomlar')"
            class="px-4 py-2.5 rounded-full text-xs font-bold border transition-all"
            :class="selectedCategory === 'taomlar' ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm' : 'bg-white text-stone-500 border-stone-200 hover:bg-stone-50'"
          >
            {{ t.filter_taomlar }}
          </button>
          <button 
            @click="handleCategoryFilter('foto')"
            class="px-4 py-2.5 rounded-full text-xs font-bold border transition-all"
            :class="selectedCategory === 'foto' ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm' : 'bg-white text-stone-500 border-stone-200 hover:bg-stone-50'"
          >
            {{ t.filter_foto }}
          </button>
          <button 
            @click="handleCategoryFilter('hunar')"
            class="px-4 py-2.5 rounded-full text-xs font-bold border transition-all"
            :class="selectedCategory === 'hunar' ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm' : 'bg-white text-stone-500 border-stone-200 hover:bg-stone-50'"
          >
            {{ t.filter_hunar }}
          </button>
        </div>

        <!-- Mates Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-if="filteredMates.length > 0" v-for="mate in filteredMates" :key="mate.id"
            class="bg-white rounded-3xl border overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col group"
            :class="selectedAiInterest && mate.specialtyKey.includes(selectedAiInterest) ? 'ring-2 ring-amber-400 border-transparent' : 'border-stone-200/80'"
          >
            
            <!-- Avatar frame -->
            <div class="relative h-60 overflow-hidden bg-stone-100">
              <img 
                :src="mate.avatar" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                :alt="mate.name" 
              />
              
              <!-- Floating indicators -->
              <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span class="text-[10px] bg-amber-500 text-white font-black px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                  <Star class="w-3 h-3 fill-current" /> {{ mate.rating }}
                </span>
                <span class="text-[10px] bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[var(--color-secondary)] font-bold">
                  ${{ mate.pricePerHour }}/{{ t.card_hour }}
                </span>
              </div>

              <!-- Recommendation badge -->
              <div v-if="selectedAiInterest && mate.specialtyKey.includes(selectedAiInterest)" class="absolute bottom-3 left-3 bg-amber-500 text-white px-2.5 py-0.5 text-[9px] font-bold rounded-lg shadow uppercase tracking-wide flex items-center gap-1">
                <Sparkles class="w-3.5 h-3.5" /> Best Match
              </div>
            </div>

            <!-- Card specs -->
            <div class="p-6 flex-1 flex flex-col space-y-4">
              <div class="flex flex-wrap gap-1.5">
                <span class="text-[9px] bg-primary-light text-[var(--color-primary)] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {{ mate.specialtyKey === 'tarix_taomlar' ? t.filter_tarix + ' & ' + t.filter_taomlar : mate.specialtyKey === 'foto' ? t.filter_foto : t.filter_hunar }}
                </span>
                <span class="text-[9px] bg-stone-100 text-stone-600 font-medium px-2.5 py-1 rounded-md">
                  {{ mate.languages.join(", ") }}
                </span>
              </div>

              <div class="space-y-1">
                <h3 class="font-display font-extrabold text-lg text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                  {{ mate.name }}, {{ mate.age }}
                </h3>
                <p class="text-xs text-stone-500 font-medium italic">{{ mate.subtitle[lang] }}</p>
              </div>

              <p class="text-stone-500 text-xs sm:text-sm font-light leading-relaxed flex-1">
                {{ mate.bio[lang] }}
              </p>

              <div class="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <div class="flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span class="text-[10px] text-stone-400 font-bold uppercase tracking-side">
                    {{ mate.id === 'rustam' ? t.card_status_busy : t.card_status_active }}
                  </span>
                </div>
                
                <button 
                  @click="handleOpenBooking(mate)" 
                  class="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1 cursor-pointer"
                >
                  <Calendar class="w-3.5 h-3.5" />
                  <span>{{ t.card_btn }}</span>
                </button>
              </div>
            </div>
          </div>
          <div v-else class="col-span-full py-12 text-center text-stone-400 font-light">
            No guides match selected criteria.
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive AI Matcher section -->
    <section id="ai-matcher" class="py-16 md:py-20 bg-gradient-to-br from-[var(--color-primary)]/95 to-[var(--color-primary-dark)] text-white relative overflow-hidden">
      
      <div class="absolute -top-32 -left-32 w-80 h-80 bg-white/5 rounded-full flex items-center justify-center border border-white/10 select-none pointer-events-none"></div>
      <div class="absolute -bottom-32 -right-32 w-80 h-80 bg-white/5 rounded-full flex items-center justify-center border border-white/10 select-none pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Info elements -->
        <div class="lg:col-span-6 space-y-6 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-bold uppercase tracking-wider">
            <Sparkles class="w-3.5 h-3.5 text-amber-300" />
            <span>{{ t.ai_banner_tag }}</span>
          </div>
          
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold leading-tight">
            {{ t.ai_desc_title }}
          </h2>
          
          <p class="text-[var(--color-primary-light)] text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
            {{ t.ai_desc_text }}
          </p>
        </div>

        <!-- AI Matchmaker quadrant selection board -->
        <div class="lg:col-span-6 flex justify-center w-full">
          <div class="bg-white rounded-3xl p-6 sm:p-8 text-stone-800 shadow-xl w-full max-w-md border border-stone-100">
            <h3 class="font-display font-extrabold text-lg text-[var(--color-secondary)] text-center mb-6">
              {{ t.ai_heading }}
            </h3>
            
            <div class="grid grid-cols-2 gap-4 mb-6">
              
              <!-- Quadrant 1 -->
              <button 
                @click="handleAiInterestSelect('foto')"
                class="group border rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all"
                :class="selectedAiInterest === 'foto' ? 'border-[var(--color-primary)] bg-[var(--color-primary-light)]/40 ring-1 ring-[var(--color-primary)]' : 'border-stone-200 bg-white hover:border-[var(--color-primary)]/50 hover:bg-stone-50'"
              >
                <div class="w-11 h-11 rounded-full flex items-center justify-center mb-2.5 transition-all"
                  :class="selectedAiInterest === 'foto' ? 'bg-[var(--color-primary)] text-white' : 'bg-stone-100 text-stone-500 group-hover:text-[var(--color-primary)]'"
                >
                  <Camera class="w-5.5 h-5.5" />
                </div>
                <span class="font-bold text-xs text-[var(--color-secondary)] block">{{ t.ai_item_art }}</span>
              </button>

              <!-- Quadrant 2 -->
              <button 
                @click="handleAiInterestSelect('taomlar')"
                class="group border rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all"
                :class="selectedAiInterest === 'taomlar' ? 'border-[var(--color-primary)] bg-[var(--color-primary-light)]/40 ring-1 ring-[var(--color-primary)]' : 'border-stone-200 bg-white hover:border-[var(--color-primary)]/50 hover:bg-stone-50'"
              >
                <div class="w-11 h-11 rounded-full flex items-center justify-center mb-2.5 transition-all"
                  :class="selectedAiInterest === 'taomlar' ? 'bg-[var(--color-primary)] text-white' : 'bg-stone-100 text-stone-500 group-hover:text-[var(--color-primary)]'"
                >
                  <Utensils class="w-5.5 h-5.5 fill-none" />
                </div>
                <span class="font-bold text-xs text-[var(--color-secondary)] block">{{ t.ai_item_food }}</span>
              </button>

              <!-- Quadrant 3 -->
              <button 
                @click="handleAiInterestSelect('tarix')"
                class="group border rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all"
                :class="selectedAiInterest === 'tarix' ? 'border-[var(--color-primary)] bg-[var(--color-primary-light)]/40 ring-1 ring-[var(--color-primary)]' : 'border-stone-200 bg-white hover:border-[var(--color-primary)]/50 hover:bg-stone-50'"
              >
                <div class="w-11 h-11 rounded-full flex items-center justify-center mb-2.5 transition-all"
                  :class="selectedAiInterest === 'tarix' ? 'bg-[var(--color-primary)] text-white' : 'bg-stone-100 text-stone-500 group-hover:text-[var(--color-primary)]'"
                >
                  <BookOpen class="w-5.5 h-5.5" />
                </div>
                <span class="font-bold text-xs text-[var(--color-secondary)] block">{{ t.ai_item_history }}</span>
              </button>

              <!-- Quadrant 4 -->
              <button 
                @click="handleAiInterestSelect('hunar')"
                class="group border rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all"
                :class="selectedAiInterest === 'hunar' ? 'border-[var(--color-primary)] bg-[var(--color-primary-light)]/40 ring-1 ring-[var(--color-primary)]' : 'border-stone-200 bg-white hover:border-[var(--color-primary)]/50 hover:bg-stone-50'"
              >
                <div class="w-11 h-11 rounded-full flex items-center justify-center mb-2.5 transition-all"
                  :class="selectedAiInterest === 'hunar' ? 'bg-[var(--color-primary)] text-white' : 'bg-stone-100 text-stone-500 group-hover:text-[var(--color-primary)]'"
                >
                  <Smile class="w-5.5 h-5.5" />
                </div>
                <span class="font-bold text-xs text-[var(--color-secondary)] block">{{ t.ai_item_life }}</span>
              </button>
            </div>

            <button 
              @click="triggerMatchResult"
              id="submit-ai-matching"
              class="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles class="w-4 h-4 text-amber-300" />
              <span>{{ t.ai_btn }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="py-16 md:py-20 bg-white border-b border-stone-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center md:text-left md:flex justify-between items-end mb-12">
          <div class="max-w-2xl space-y-3">
            <h2 class="font-display text-3xl font-extrabold text-[var(--color-secondary)]">{{ t.testimonials_title }}</h2>
            <p class="text-stone-500 text-base font-light">{{ t.testimonials_subtitle }}</p>
          </div>

          <div class="mt-4 md:mt-0 px-4 py-2 bg-stone-100 rounded-xl inline-flex items-center gap-1.5 text-xs text-stone-500 font-semibold border border-stone-200">
            <Info class="w-4 h-4 text-[var(--color-primary)]" />
            <span>{{ t.reviews_add_btn }}</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="rev in TESTIMONIALS_DATA" :key="rev.id"
            class="bg-stone-50 rounded-3xl p-8 border border-stone-200/80 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative group"
          >
            <div class="space-y-4">
              <div class="flex text-amber-500 gap-0.5">
                <Star v-for="i in rev.rating" :key="i" class="w-4 h-4 fill-current" />
              </div>
              <p class="text-stone-500 text-xs sm:text-sm font-light leading-relaxed italic">
                "{{ rev.comment[lang] }}"
              </p>
            </div>
            
            <div class="flex items-center gap-3.5 pt-5 border-t border-stone-200/60 mt-6 sm:mt-8">
              <div class="w-11 h-11 rounded-full bg-[var(--color-secondary)] text-white font-extrabold flex items-center justify-center font-display text-sm tracking-tighter">
                {{ rev.userInitials }}
              </div>
              <div>
                <p class="font-bold text-xs sm:text-sm text-[var(--color-secondary)]">{{ rev.userName }}</p>
                <p class="text-[10px] text-stone-400 font-medium">
                  {{ rev.country[lang] }} • {{ rev.mateName }} bilan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-stone-100 border-t border-stone-200 py-12 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div class="flex items-center justify-center gap-2">
          <div class="w-8 h-8 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center text-[var(--color-primary)] font-bold">
            ★
          </div>
          <span class="font-display font-extrabold text-sm tracking-tight text-[var(--color-secondary)]">
            Samarkand Local Mate — {{ lang === 'en' ? 'Explorer' : lang === 'ru' ? 'Гид Концепт' : 'Mahalliy Gidlar' }}
          </span>
        </div>

        <div class="flex flex-wrap justify-center gap-6 text-xs font-semibold text-stone-500">
          <a href="#" class="hover:text-[var(--color-primary)] transition-colors">{{ t.foot_priv }}</a>
          <a href="#" class="hover:text-[var(--color-primary)] transition-colors">{{ t.foot_terms }}</a>
          <a href="#" class="hover:text-[var(--color-primary)] transition-colors">{{ t.foot_contact }}</a>
          <a href="#" class="hover:text-[var(--color-primary)] transition-colors">{{ t.foot_safety }}</a>
        </div>

        <div class="h-px bg-stone-200 max-w-sm mx-auto"></div>

        <p class="text-[11.5px] text-stone-400 max-w-lg mx-auto leading-relaxed">
          {{ t.footer_copy }}
        </p>
      </div>
    </footer>

    <!-- MODAL 1: Profile outlook & Itinerary scheduling receipt -->
    <div v-if="activeMate" class="fixed inset-0 bg-stone-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl border border-stone-100 flex flex-col max-h-[90vh]">
        
        <div class="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white p-5 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img 
              :src="activeMate.avatar" 
              class="w-11 h-11 rounded-full object-cover border-2 border-white/20" 
              :alt="activeMate.name" 
            />
            <div>
              <h4 class="font-display font-bold text-sm sm:text-base">
                {{ activeMate.name }}, {{ activeMate.age }}
              </h4>
              <p class="text-[10px] sm:text-xs text-[var(--color-primary-light)] font-medium italic">
                {{ activeMate.subtitle[lang] }}
              </p>
            </div>
          </div>
          <button 
            @click="activeMate = null; showTicket = false"
            class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
          >
            <X class="w-4 h-4" />
          </button>
        </div>

        <div class="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-stone-700">
          
          <template v-if="!showTicket">
            
            <div class="grid grid-cols-2 gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-200/60">
              <div>
                <span class="block text-[9.5px] font-bold text-stone-400 uppercase tracking-wide">{{ t.modal_languages }}</span>
                <strong class="text-[var(--color-secondary)] text-xs sm:text-sm">{{ activeMate.languages.join(", ") }}</strong>
              </div>
              <div>
                <span class="block text-[9.5px] font-bold text-stone-400 uppercase tracking-wide">{{ t.modal_price }}</span>
                <strong class="text-[var(--color-secondary)] text-xs sm:text-sm">${{ activeMate.pricePerHour }}/{{ t.card_hour }}</strong>
              </div>
            </div>

            <div class="space-y-2">
              <h5 class="font-bold flex items-center gap-1.5 text-[var(--color-secondary)]">
                <Award class="w-4.5 h-4.5 text-[var(--color-primary)]" />
                <span>{{ t.modal_experience }}</span>
              </h5>
              <p class="text-stone-500 leading-relaxed italic border-l-2 border-[var(--color-primary)]/20 pl-3">
                {{ activeMate.details.experience[lang] }}
              </p>
            </div>

            <div class="space-y-2">
              <h5 class="font-bold flex items-center gap-1.5 text-[var(--color-secondary)]">
                <Car class="w-4.5 h-4.5 text-[var(--color-primary)]" />
                <span>{{ t.modal_transport }}</span>
              </h5>
              <p class="text-stone-500 pl-6 relative">
                <span class="absolute left-1 top-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></span>
                {{ activeMate.details.transport[lang] }}
              </p>
            </div>

            <div class="space-y-3">
              <h5 class="font-bold flex items-center gap-1.5 text-[var(--color-secondary)]">
                <BookOpen class="w-4.5 h-4.5 text-[var(--color-primary)]" />
                <span>{{ t.modal_itinerary }}</span>
              </h5>
              <div class="space-y-2.5 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                <div v-for="(item, idx) in activeMate.details.itinerary[lang]" :key="idx" class="flex items-start gap-2 text-stone-600">
                  <Check class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{{ item }}</span>
                </div>
              </div>
            </div>

            <div class="border-t border-stone-200 pt-5 space-y-4">
              <div>
                <h5 class="font-display font-extrabold text-[var(--color-secondary)] text-sm">
                  {{ t.modal_book_now }}
                </h5>
                <span class="text-[10px] text-amber-600 font-semibold">{{ t.modal_book_desc }}</span>
              </div>

              <form @submit.prevent="submitBookingForm" class="space-y-4">
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-[10px] font-bold text-stone-400 uppercase mb-1">Date (Sana)</label>
                    <input 
                      type="date"
                      required
                      min="2026-06-08"
                      v-model="bookingDate"
                      class="w-full text-xs font-semibold p-2.5 bg-white border border-stone-200 rounded-xl focus:border-[var(--color-primary)] outline-none" 
                    />
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold text-stone-400 uppercase mb-1">Time (Vaqt)</label>
                    <input 
                      type="time" 
                      required
                      v-model="bookingTime"
                      class="w-full text-xs font-semibold p-2.5 bg-white border border-stone-200 rounded-xl focus:border-[var(--color-primary)] outline-none" 
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  class="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white py-3 rounded-xl text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Ticket class="w-4 h-4" />
                  <span>{{ t.modal_book_now }}</span>
                </button>
              </form>
            </div>
          </template>

          <!-- Ticket generated state -->
          <div v-else class="py-4 space-y-6">
            <div class="text-center space-y-2">
              <div class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                <Check class="w-6 h-6" />
              </div>
              <h5 class="font-display font-black text-[var(--color-secondary)] text-base">
                {{ t.ticket_created }}
              </h5>
              <p class="text-xs text-stone-400 max-w-sm mx-auto">
                {{ t.ticket_desc }}
              </p>
            </div>

            <!-- Pre-assembled Ticket -->
            <div class="bg-slate-9 border border-[var(--color-secondary)]/20 rounded-2xl overflow-hidden shadow-sm relative">
              <div class="absolute left-0 right-0 top-0 h-1.5 bg-[var(--color-secondary)]"></div>
              <div class="bg-[var(--color-secondary)]/5 p-4 flex justify-between border-b border-stone-200/60 text-xs">
                <div>
                  <span class="text-[9px] uppercase font-bold text-stone-400 block">{{ t.ticket_mate }}</span>
                  <strong class="text-[var(--color-secondary)] text-[13px]">{{ activeMate.name }}</strong>
                </div>
                <div class="text-right">
                  <span class="text-[9px] uppercase font-bold text-stone-400 block">Voucher ID</span>
                  <strong class="font-mono text-[var(--color-primary)] font-bold">{{ currentTicketCode }}</strong>
                </div>
              </div>

              <div class="p-4 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span class="text-[9px] uppercase font-bold text-stone-400 block">{{ t.ticket_date }}</span>
                  <strong class="text-stone-700">{{ bookingDate }}</strong>
                </div>
                <div>
                  <span class="text-[9px] uppercase font-bold text-stone-400 block">{{ t.ticket_time }}</span>
                  <strong class="text-stone-700">{{ bookingTime }}</strong>
                </div>
                <div>
                  <span class="text-[9px] uppercase font-bold text-stone-400 block">{{ t.ticket_price }}</span>
                  <strong class="text-emerald-600 font-bold">${{ activeMate.pricePerHour * 4 }} (Est. 4h)</strong>
                </div>
                <div>
                  <span class="text-[9px] uppercase font-bold text-stone-400 block">Status</span>
                  <strong class="text-emerald-500 font-bold uppercase tracking-wider">Confirmed (Statik)</strong>
                </div>
              </div>

              <div class="absolute -left-2 top-[34%] w-4 h-4 rounded-full bg-white border-r border-stone-200/40"></div>
              <div class="absolute -right-2 top-[34%] w-4 h-4 rounded-full bg-white border-l border-stone-200/40"></div>
            </div>

            <button 
              @click="activeMate = null; showTicket = false" 
              class="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold py-2.5 rounded-xl text-xs tracking-wider transition-all cursor-pointer"
            >
              {{ t.ticket_close }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL 2: Interactive AI Recommendation Pop -->
    <div v-if="isAiMatchedPopup && aiMatchedMate" class="fixed inset-0 bg-stone-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl border border-stone-100 p-6 text-center space-y-6">
        
        <div class="relative w-24 h-24 mx-auto">
          <img 
            :src="aiMatchedMate.avatar" 
            class="w-24 h-24 rounded-full object-cover border-4 border-amber-400 shadow-md" 
            :alt="aiMatchedMate.name" 
          />
          <span class="absolute bottom-1 right-1 bg-amber-400 text-stone-800 p-1.5 rounded-full shadow">
            <Sparkles class="w-4 h-4" />
          </span>
        </div>

        <div class="space-y-1">
          <span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest block w-max mx-auto">
            Best Archetype Match
          </span>
          <h4 class="font-display font-extrabold text-xl text-[var(--color-secondary)] pt-2">
            {{ aiMatchedMate.name }}, {{ aiMatchedMate.age }}
          </h4>
          <p class="text-xs text-stone-500 italic max-w-xs mx-auto">
            {{ aiMatchedMate.subtitle[lang] }}
          </p>
        </div>

        <p class="text-stone-500 text-xs sm:text-sm font-light leading-relaxed">
          {{ aiMatchedMate.bio[lang] }}
        </p>

        <div class="flex items-center justify-center gap-1.5 text-xs font-bold text-stone-500 bg-stone-50 py-2.5 rounded-xl border border-stone-100">
          <ShieldCheck class="w-4.5 h-4.5 text-[var(--color-primary)]" />
          <span>Matching complete (100% Match Ratio)</span>
        </div>

        <div class="grid grid-cols-2 gap-3 pt-2">
          <button 
            @click="isAiMatchedPopup = false; handleOpenBooking(aiMatchedMate)" 
            class="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-xs font-bold py-3 rounded-xl transition-all cursor-pointer"
          >
            {{ t.card_btn }}
          </button>
          <button 
            @click="isAiMatchedPopup = false" 
            class="bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold py-3 rounded-xl transition-all cursor-pointer"
          >
            {{ t.modal_close }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>
