import { prices } from "./Data";
const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
export type PlanFeature = {
  id: string;  
  description: string;
};
export type Plan = {
  id: string;  
  name: string;
  description: string;
  cost: number;  
  features: Array<PlanFeature>;
};

export const getPlans = async():Promise<Plan[]> => {
    try {
        var response = await fetch(`${API_URL}/api/plans`)
    
        if (!response.ok) {
            return prices as Plan[];
            // throw new Error('Network response was not ok');
        }
        var plans = await response.json() as Plan[];
        
        return plans;    
    }
    catch (error) {
        console.error('Error fetching plans:', error);
        return prices as Plan[];
    }    
    
}