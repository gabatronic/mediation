<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { getCountryPhoneCodes } from './mediationService';
import PricingItem from '@/Pricing/PricingItem.vue';
import { prices } from '@/Pricing/Data';
import CheckIcon from '@/components/Icons/CheckIcon.vue';
const countries = ref([]);
const loading = ref(true);

// Load countries on component mount
getCountryPhoneCodes().then(result => {
  countries.value = result;
  loading.value = false;
});

const formSteps = ref(
    [
        { 
            step: 1, 
            title: 'Tus Datos Básicos',
            data: {
                firstName: '',
                lastName: '',
                country: '',
                phone: '',
                email: '',                
            }
        },
        { 
            step: 2, 
            title: 'Información Adicional del Solicitante',
            data: {
                birthDate: '',
                borthPlace: '',
                city: '',
                address: '',
                postalCode: '',
            }
        },
        { 
            step: 3, 
            title: 'Datos de la parte requerida',
            data: {
                firstName: '',
                lastName: '',
                country: '',
                phone: '',
                email: '',                
            } 
        },
        {
            step: 4,
            title: 'Información de la mediacion',
            data: {
                jurisdiction: '',
                scope: '',
                topology: '',
                topic: '',
                description: '',
            }
        },
        { 
            step: 5, 
            title: 'Plan de mediación',
            data: {
                plan: '',
                agreement: false,
            }
        },        
    ]    
)

// Current step tracking
const currentStep = ref(1);

// Computed property to get the current step data
const currentStepData = computed(() => {
  return formSteps.value.find(step => step.step === currentStep.value) || formSteps.value[0];
});

// Form validation errors
const errors = ref({});

// Validate current step
const validateCurrentStep = () => {
  const step = currentStepData.value;
  const stepErrors = {};
  let isValid = true;
  
  // Different validation logic based on step number
  switch(step.step) {
    case 1:
        if (!step.data.firstName.trim()) {
        stepErrors['firstName'] = 'El nombre es obligatorio';
        isValid = false;
        }
        
        if (!step.data.lastName.trim()) {
        stepErrors['lastName'] = 'El apellido es obligatorio';
        isValid = false;
        }
        
        if (!step.data.country) {
        stepErrors['country'] = 'Selecciona un país';
        isValid = false;
        }
        
        if (!step.data.phone.trim()) {
        stepErrors['phone'] = 'El teléfono es obligatorio';
        isValid = false;
        }
        
        if (!step.data.email.trim()) {
        stepErrors['email'] = 'El email es obligatorio';
        isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(step.data.email)) {
        stepErrors['email'] = 'Email inválido';
        isValid = false;
        }
        break;

    case 2:
        if (!step.data.birthDate) {
        stepErrors['birthDate'] = 'La fecha de nacimiento es obligatoria';
        isValid = false;
        }
        
        if (!step.data.city.trim()) {
        stepErrors['city'] = 'La ciudad es obligatoria';
        isValid = false;
        }
        
        if (!step.data.address.trim()) {
        stepErrors['address'] = 'La dirección es obligatoria';
        isValid = false;
        }
        break;

    case 3:
        if (!step.data.firstName.trim()) {
        stepErrors['firstName'] = 'El nombre es obligatorio';
        isValid = false;
        }
        
        if (!step.data.lastName.trim()) {
        stepErrors['lastName'] = 'El apellido es obligatorio';
        isValid = false;
        }
        
        if (!step.data.email.trim()) {
        stepErrors['email'] = 'El email es obligatorio';
        isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(step.data.email)) {
        stepErrors['email'] = 'Email inválido';
        isValid = false;
        }
        break;

    case 4:
        if (!step.data.jurisdiction.trim()) {
        stepErrors['jurisdiction'] = 'La jurisdicción es obligatoria';
        isValid = false;
        }
        
        if (!step.data.scope.trim()) {
        stepErrors['scope'] = 'El ámbito es obligatorio';
        isValid = false;
        }
        
        if (!step.data.topic.trim()) {
        stepErrors['topic'] = 'El tema es obligatorio';
        isValid = false;
        }
        
        break;

    case 5:
        if (!step.data.plan.trim()) {
        stepErrors['plan'] = 'El plan de mediación es obligatorio';
        isValid = false;
        }
        
        if (!step.data.agreement) {
        stepErrors['agreement'] = 'Debes aceptar el acuerdo';
        isValid = false;
        }
        break;
  }
  
  errors.value = stepErrors;
  return isValid;
};

// Navigation methods
const nextStep = () => {
  if (validateCurrentStep()) {
    if (currentStep.value < formSteps.value.length) {
      currentStep.value++;
    }
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const submitForm = () => {
  if (validateCurrentStep()) {
    // Here you would process the form data, e.g., send to API
    console.log('Form submitted successfully', formSteps.value);
    console.log('currentStepData.data', currentStepData.value.data);
    alert('Formulario enviado con éxito!');
  }
};

watch(currentStepData.value.data.plan, (newValue) => {
  if (newValue) {
    const selectedPlan = prices.find(price => price.title === newValue);
    if (selectedPlan) {
      // currentStepData.value.data.plan = selectedPlan;
      console.log('Selected plan:', selectedPlan);
    }
  }
});
</script>

<template>   
    <div class="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <!-- Progress bar -->
        <div class="mb-8">
            <div class="flex items-center justify-between">
                <div v-for="step in formSteps" :key="step.step" class="flex flex-col items-center">
                    <div 
                      :class="[
                        'rounded-lg h-10 w-10 flex items-center justify-center font-bold', 
                        currentStep >= step.step 
                          ? 'bg-green-400 text-white' 
                          : 'bg-gray-200 text-gray-700'
                      ]"
                    >
                      {{ step.step }}
                    </div>
                    <span class="text-xs mt-2 text-center">{{ step.title }}</span>
                    <div v-if="step.step < formSteps.length" class="hidden md:block w-12 h-1 bg-gray-200 mx-2"></div>
                </div>
            </div>
            
            <!-- Mobile progress bar -->
            <div class="mt-4 block md:hidden">
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      class="bg-blue-600 h-2 rounded-full" 
                      :style="{ width: `${(currentStep / formSteps.length) * 100}%` }"
                    ></div>
                </div>
            </div>
        </div>
        
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
            {{ currentStepData.title }}
        </h2>
        
        <form @submit.prevent="currentStep === formSteps.length ? submitForm() : nextStep()">
            <!-- Step 1: Basic Information -->
            <div v-if="currentStep === 1" class="space-y-4">
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="firstName">Nombre</label>
                    <input 
                        id="firstName"
                        v-model="currentStepData.data.firstName"
                        type="text" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tu nombre"
                    >
                    <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="lastName">Apellidos</label>
                    <input 
                        id="lastName"
                        v-model="currentStepData.data.lastName"
                        type="text" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tus apellidos"
                    >
                    <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="country">País</label>
                    <select 
                        id="country"
                        v-model="currentStepData.data.country"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled selected>Selecciona un país</option>
                        <option v-for="country in countries" :key="country.code" :value="country.code">
                            {{ country.country }} {{ country.flag }}
                        </option>
                    </select>
                    <p v-if="errors.country" class="text-red-500 text-sm mt-1">{{ errors.country }}</p>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="phone">Teléfono</label>
                    <input 
                        id="phone"
                        v-model="currentStepData.data.phone"
                        type="tel" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tu teléfono"
                    >
                    <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="email">Email</label>
                    <input 
                        id="email"
                        v-model="currentStepData.data.email"
                        type="email" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tu email"
                    >
                    <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                </div>
            </div>
            
            <!-- Step 2: Additional Information -->
            <div v-else-if="currentStep === 2" class="space-y-4">
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="birthDate">Fecha de Nacimiento</label>
                    <input 
                        id="birthDate"
                        v-model="currentStepData.data.birthDate"
                        type="date" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                    <p v-if="errors.birthDate" class="text-red-500 text-sm mt-1">{{ errors.birthDate }}</p>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="borthPlace">Lugar de Nacimiento</label>
                    <input 
                        id="borthPlace"
                        v-model="currentStepData.data.borthPlace"
                        type="text" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Lugar de nacimiento"
                    >
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="city">Ciudad</label>
                    <input 
                        id="city"
                        v-model="currentStepData.data.city"
                        type="text" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tu ciudad"
                    >
                    <p v-if="errors.city" class="text-red-500 text-sm mt-1">{{ errors.city }}</p>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="address">Dirección</label>
                    <input 
                        id="address"
                        v-model="currentStepData.data.address"
                        type="text" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tu dirección"
                    >
                    <p v-if="errors.address" class="text-red-500 text-sm mt-1">{{ errors.address }}</p>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="postalCode">Código Postal</label>
                    <input 
                        id="postalCode"
                        v-model="currentStepData.data.postalCode"
                        type="text" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tu código postal"
                    >
                </div>
            </div>
            
            <!-- Step 3: Required Party Data -->
            <div v-else-if="currentStep === 3" class="space-y-4">
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="reqFirstName">Nombre</label>
                    <input 
                        id="reqFirstName"
                        v-model="currentStepData.data.firstName"
                        type="text" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nombre de la otra parte"
                    >
                    <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="reqLastName">Apellidos</label>
                    <input 
                        id="reqLastName"
                        v-model="currentStepData.data.lastName"
                        type="text" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Apellidos de la otra parte"
                    >
                    <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="reqCountry">País</label>
                    <select 
                        id="reqCountry"
                        v-model="currentStepData.data.country"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled selected>Selecciona un país</option>
                        <option v-for="country in countries" :key="country.code" :value="country.code">
                            {{ country.country }} {{ country.flag }}
                        </option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="reqPhone">Teléfono</label>
                    <input 
                        id="reqPhone"
                        v-model="currentStepData.data.phone"
                        type="tel" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Teléfono de la otra parte"
                    >
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="reqEmail">Email</label>
                    <input 
                        id="reqEmail"
                        v-model="currentStepData.data.email"
                        type="email" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email de la otra parte"
                    >
                    <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                </div>
            </div>
            
            <!-- Step 4: Mediation Information -->
            <div v-else-if="currentStep === 4" class="space-y-4">
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="jurisdiction">Jurisdicción</label>
                    <select 
                        id="jurisdiction"
                        v-model="currentStepData.data.jurisdiction"
                        type="text" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Jurisdicción"
                    >
                        <option value="" disabled selected>Selecciona una jurisdicción</option>
                        <option value="civil">Civil</option>
                        <option value="criminal">Criminal</option>
                        <option value="administrative">Administrativa</option>
                    </select>
                    <p v-if="errors.jurisdiction" class="text-red-500 text-sm mt-1">{{ errors.jurisdiction }}</p>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="scope">Ámbito</label>
                    <select 
                        id="scope"
                        v-model="currentStepData.data.scope"
                        type="text" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ámbito de mediación"
                    >
                        <option value="" disabled selected>Selecciona un ámbito</option>
                        <option value="family">Familiar</option>
                        <option value="work">Laboral</option>
                        <option value="commercial">Comercial</option>
                        <option value="community">Comunitario</option>
                    </select>
                    <p v-if="errors.scope" class="text-red-500 text-sm mt-1">{{ errors.scope }}</p>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="topology">Tipología</label>
                    <select 
                        id="topology"
                        v-model="currentStepData.data.topology"
                        type="text" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tipología"
                    >
                        <option value="" disabled selected>Selecciona una tipología</option>
                        <option value="mediation">Mediación</option>
                        <option value="conciliation">Conciliación</option>
                        <option value="arbitration">Arbitraje</option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="topic">Tema</label>
                    <input 
                        id="topic"
                        v-model="currentStepData.data.topic"
                        type="text" 
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tema de mediación"
                    >
                    <p v-if="errors.topic" class="text-red-500 text-sm mt-1">{{ errors.topic }}</p>
                </div>
                
                <div>
                    <label class="block text-gray-700 font-medium mb-2" for="description">Descripción</label>
                    <textarea 
                        id="description"
                        v-model="currentStepData.data.description"
                        rows="4"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Descripción detallada"
                    ></textarea>
                </div>
            </div>
            
            <!-- Step 5: Mediation Plan -->
            <div v-else-if="currentStep === 5" class="space-y-4">
                <div>
                    <div class="grid sm:grid-cols-3 items-center mb-2 w-fit gap-1">                        
                        <div v-for="(price, index) in prices" :key="index" class="w-1/3 relative">
                            <PricingItem                        
                                :title="price.title"
                                :subtitle="price.subtitle"
                                :description="price.description"
                                :price="price.price"
                                :features="price.features"
                                :cardWidth="'w-70'"
                                @click="currentStepData.data.plan = price.title"
                                :selected="currentStepData.data.plan === price.title"
                            />
                            <div v-if="currentStepData.data.plan === price.title" 
                            class="w-11 h-11 absolute bottom-4 left-26 border-3 border-green-500 rounded-full bg-white">
                                <CheckIcon 
                                    v-if="currentStepData.data.plan === price.title" 
                                    class="w-8 h-8 stroke-green-500 left-0.5 top-1 absolute"                                   
                                />
                            </div>
                            <input radiogroup="plan" type="radio" :value="price.title" v-model="currentStepData.data.plan" class="hidden" />

                        </div>
                        
                        <div class="ml-2">
                        </div>                        
                        
                    </div>

                    <p v-if="errors.plan" class="text-red-500 text-sm mt-1">{{ errors.plan }}</p>
                </div>
                
                <div class="flex items-center border-gray-300 border-1 p-4 rounded-md">
                    <input 
                        id="agreement"
                        v-model="currentStepData.data.agreement"
                        type="checkbox" 
                        class="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    >
                    <label for="agreement" class="ml-2 text-gray-700 rounded-md">
                        Acepto los términos y condiciones del plan de mediación
                    </label>
                </div>
                <p v-if="errors.agreement" class="text-red-500 text-sm mt-1">{{ errors.agreement }}</p>
            </div>
            
            <!-- Navigation buttons -->
            <div class="flex justify-between mt-8">
                <button 
                    v-if="currentStep > 1" 
                    type="button"
                    @click="prevStep"
                    class="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Anterior
                </button>
                <div v-else></div>
                
                <button 
                    type="submit"
                    class="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {{ currentStep === formSteps.length ? 'Enviar' : 'Siguiente' }}
                </button>
            </div>
        </form>
    </div>
</template>
