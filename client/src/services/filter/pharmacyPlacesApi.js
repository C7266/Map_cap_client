export const fetchPharmacyPlacesData = async (lat, lng) => {
    try {
      // 위치 정보를 쿼리 파라미터로 추가
      const params = new URLSearchParams({
        lat: lat,
        lng: lng
      });
       const API_BASE_URL = 'https://moyak.store';
      const response = await fetch(`${API_BASE_URL}/api/pharmacyPlaces?${params}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch pharmacy places: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in fetchPharmacyPlacesData:", error);
      return [];
    }
  };
  