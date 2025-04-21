const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
export const getCountryPhoneCodes = async () => {
    const countryPhoneCodes = [
        { country: "Afghanistan", code: "+93", flag: "🇦🇫" },
        { country: "Albania", code: "+355", flag: "🇦🇱" },
        { country: "Algeria", code: "+213", flag: "🇩🇿" },
        { country: "Andorra", code: "+376", flag: "🇦🇩" },
        { country: "Angola", code: "+244", flag: "🇦🇴" },
        { country: "Argentina", code: "+54", flag: "🇦🇷" },
        { country: "Armenia", code: "+374", flag: "🇦🇲" },
        { country: "Australia", code: "+61", flag: "🇦🇺" },
        { country: "Austria", code: "+43", flag: "🇦🇹" },
        { country: "Azerbaijan", code: "+994", flag: "🇦🇿" },
        { country: "Bahamas", code: "+1", flag: "🇧🇸" },
        { country: "Bahrain", code: "+973", flag: "🇧🇭" },
        { country: "Bangladesh", code: "+880", flag: "🇧🇩" },
        { country: "Belarus", code: "+375", flag: "🇧🇾" },
        { country: "Belgium", code: "+32", flag: "🇧🇪" },
        { country: "Bosnia and Herzegovina", code: "+387", flag: "🇧🇦" },
        { country: "Brazil", code: "+55", flag: "🇧🇷" },
        { country: "Bulgaria", code: "+359", flag: "🇧🇬" },
        { country: "Canada", code: "+1", flag: "🇨🇦" },
        { country: "China", code: "+86", flag: "🇨🇳" },
        { country: "Croatia", code: "+385", flag: "🇭🇷" },
        { country: "Cyprus", code: "+357", flag: "🇨🇾" },
        { country: "Czech Republic", code: "+420", flag: "🇨🇿" },
        { country: "Denmark", code: "+45", flag: "🇩🇰" },
        { country: "Estonia", code: "+372", flag: "🇪🇪" },
        { country: "Finland", code: "+358", flag: "🇫🇮" },
        { country: "France", code: "+33", flag: "🇫🇷" },
        { country: "Georgia", code: "+995", flag: "🇬🇪" },
        { country: "Germany", code: "+49", flag: "🇩🇪" },
        { country: "Greece", code: "+30", flag: "🇬🇷" },
        { country: "Hungary", code: "+36", flag: "🇭🇺" },
        { country: "Iceland", code: "+354", flag: "🇮🇸" },
        { country: "India", code: "+91", flag: "🇮🇳" },
        { country: "Ireland", code: "+353", flag: "🇮🇪" },
        { country: "Italy", code: "+39", flag: "🇮🇹" },
        { country: "Japan", code: "+81", flag: "🇯🇵" },
        { country: "Kazakhstan", code: "+7", flag: "🇰🇿" },
        { country: "Kosovo", code: "+383", flag: "🇽🇰" },
        { country: "Latvia", code: "+371", flag: "🇱🇻" },
        { country: "Liechtenstein", code: "+423", flag: "🇱🇮" },
        { country: "Lithuania", code: "+370", flag: "🇱🇹" },
        { country: "Luxembourg", code: "+352", flag: "🇱🇺" },
        { country: "Malta", code: "+356", flag: "🇲🇹" },
        { country: "Mexico", code: "+52", flag: "🇲🇽" },
        { country: "Moldova", code: "+373", flag: "🇲🇩" },
        { country: "Monaco", code: "+377", flag: "🇲🇨" },
        { country: "Montenegro", code: "+382", flag: "🇲🇪" },
        { country: "Netherlands", code: "+31", flag: "🇳🇱" },
        { country: "North Macedonia", code: "+389", flag: "🇲🇰" },
        { country: "Norway", code: "+47", flag: "🇳🇴" },
        { country: "Poland", code: "+48", flag: "🇵🇱" },
        { country: "Portugal", code: "+351", flag: "🇵🇹" },
        { country: "Romania", code: "+40", flag: "🇷🇴" },
        { country: "Russia", code: "+7", flag: "🇷🇺" },
        { country: "San Marino", code: "+378", flag: "🇸🇲" },
        { country: "Serbia", code: "+381", flag: "🇷🇸" },
        { country: "Slovakia", code: "+421", flag: "🇸🇰" },
        { country: "Slovenia", code: "+386", flag: "🇸🇮" },
        { country: "Spain", code: "+34", flag: "🇪🇸" },
        { country: "Sweden", code: "+46", flag: "🇸🇪" },
        { country: "Switzerland", code: "+41", flag: "🇨🇭" },
        { country: "Turkey", code: "+90", flag: "🇹🇷" },
        { country: "Ukraine", code: "+380", flag: "🇺🇦" },
        { country: "United Kingdom", code: "+44", flag: "🇬🇧" },
        { country: "United States", code: "+1", flag: "🇺🇸" },
        { country: "Vatican City", code: "+39", flag: "🇻🇦" },
        // Add more countries as needed
    ];
    return countryPhoneCodes;
}

export type Jurisdiction = {
    id: string;
    name: string
}
export type Scope = {
    jurisdictionId: string;
    id: string;
    name: string;
}
export type Topology = {
    jurisdictionId: string;
    scopeId: string;
    id: string;
    name: string;
}
export const getJuristions = async ():Promise<Jurisdiction[]> => {
    
    try {
        var response = await fetch(`${API_URL}/jurisdictions`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        var jurisdictions = await response.json() as Jurisdiction[];
        return jurisdictions;
    }
    catch (error) {
        console.error('Error fetching jurisdictions:', error);
        return [];
    }    
}

export const getScopes = async (jurisdictionId: string):Promise<Scope[]> => {
    try {
        var response = await fetch(`${API_URL}/jurisdictions/${jurisdictionId}/scopes`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        var scopes = await response.json() as Scope[];
        return scopes;
    }
    catch (error) {
        console.error('Error fetching jurisdictions:', error);
        return [];
    }    
}
export const getTopologies = async (scopeId: string):Promise<Topology[]> => {
    try {
        var response = await fetch(`${API_URL}/scopes/${scopeId}/topologies`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        var topologies = await response.json() as Topology[];
        return topologies;
    }
    catch (error) {
        console.error('Error fetching jurisdictions:', error);
        return [];
    }    
}
