// Instructions to every other class on how they can be an argument to addMarker
// as long as they have a location, it will work
interface Mappable {
    location: {
        lat: number,
        lng: number
    };
}

export class CustomMap {
    // remember, all properties are public by default. make sure to always modify your class properties
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    // takes any argument (User, Company, etc) as long as it satisfies the Mappable interface
    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
    }

}

