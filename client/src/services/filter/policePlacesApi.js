export const fetchPolicePlacesData = async (lat, lng) => {
    try {
      // 위치 정보를 쿼리 파라미터로 추가
      const params = new URLSearchParams({
        lat: lat,
        lng: lng
      });
      const PROXY_URL = 'https://moyak.store';
      const response = await fetch(`${PROXY_URL}/api/policePlaces?${params}`);
      
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
  