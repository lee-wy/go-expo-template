const API_BASE_URL = 'http://localhost:8080';

export const checkHealthStatus = async (): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (response.ok) {
      return 'Healthy';
    } else {
      return `Error: ${response.status}`;
    }
  } catch (error) {
    return 'Offline';
  }
};