import time
from datetime import datetime, timedelta
from opensky_api import OpenSkyApi

# Function to get the start and end of the current day as Unix timestamps


def get_todays_timestamps():
    now = datetime.utcnow()
    start_of_day = datetime(now.year, now.month, now.day)
    end_of_day = start_of_day + timedelta(days=1)
    return int(start_of_day.timestamp()), int(end_of_day.timestamp())


# Replace 'YOUR_USERNAME' and 'YOUR_PASSWORD' with your OpenSky Network credentials
USERNAME = 'malikadeelkhokhar'
PASSWORD = 'H5Vs9@Nz'
AIRPORT_ICAO = 'OPLA'  # ICAO code for Lahore Allama Iqbal International Airport


def get_todays_departures(airport_icao, username, password):
    api = OpenSkyApi(username, password)
    start, end = get_todays_timestamps()

    departures = api.get_departures_by_airport(airport_icao, start, end)

    if departures:
        for flight in departures:
            print(f"Flight {flight.callsign} from {
                  flight.estDepartureAirport} to {flight.estArrivalAirport}")
    else:
        print("No departures found for today.")


if __name__ == "__main__":
    get_todays_departures(AIRPORT_ICAO, USERNAME, PASSWORD)
