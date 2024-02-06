const iNaturalistAPI = require( "./inaturalist_api" );

const testHelper = class testHelper {
  static mockResponse( uri ) {
    return {
      total_results: 1,
      page: 1,
      per_page: 1,
      test_uri: uri,
      results: [{ id: 1 }]
    };
  }

  static suggestResponse( uri ) {
    return Object.assign( testHelper.mockResponse( uri ), {
      query: { },
      results: [
        {
          sourceType: "foo",
          taxon: { id: 1 }
        }
      ]
    } );
  }

  static taxonResponse( uri ) {
    return Object.assign( testHelper.mockResponse( uri ), {
      results: [
        {
          id: 1,
          default_photo: {
            square_url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5_s.jpg",
            attribution: "(c) Ken-ichi, some rights reserved (CC BY-NC)",
            medium_url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5.jpg",
            id: 1287,
            license_code: "cc-by-nc",
            url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5_s.jpg"
          },
          taxon_photos: [
            {
              taxon: { id: 1 },
              photo: {
                square_url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5_s.jpg",
                native_page_url: "https://www.flickr.com/photos/ken-ichi/2640144803/",
                small_url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5_m.jpg",
                attribution: "(c) Ken-ichi, some rights reserved (CC BY-NC)",
                medium_url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5.jpg",
                id: 1287,
                license_code: "cc-by-nc",
                large_url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5_b.jpg",
                url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5_s.jpg",
                original_dimensions: null
              }
            },
            {
              taxon: { id: 2 },
              photo: {
                square_url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5_s.jpg",
                native_page_url: "https://www.flickr.com/photos/ken-ichi/2640144803/",
                small_url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5_m.jpg",
                attribution: "(c) Ken-ichi, some rights reserved (CC BY-NC)",
                medium_url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5.jpg",
                id: 1288,
                license_code: "cc-by-nc",
                large_url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5_b.jpg",
                url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5_s.jpg",
                original_dimensions: null
              }
            }
          ],
          conservation_status: {
            taxon_id: 1,
            status: "E",
            authority: "U.S. Fish & Wildlife Service",
            iucn: 40,
            url: "http://ecos.fws.gov/tess_public/profile/speciesProfile?spcode=B002",
            description: "",
            place_display_name: "United States",
            place: {
              id: 1,
              name: "United States",
              display_name: "United States",
              ancestor_place_ids: []
            }
          },
          conservation_statuses: [
            {
              taxon_id: 1,
              status: "E",
              authority: "U.S. Fish & Wildlife Service",
              iucn: 40,
              url: "http://ecos.fws.gov/tess_public/profile/speciesProfile?spcode=B002",
              description: "",
              place_display_name: "United States",
              place: {
                id: 1,
                name: "United States",
                display_name: "United States",
                ancestor_place_ids: []
              }
            }
          ],
          ancestors: [
            {
              observations_count: 77,
              is_active: true,
              iconic_taxon_id: 12,
              rank_level: 70,
              parent_id: 1,
              name: "Plantae",
              rank: "kingdom",
              id: 12,
              default_photo: {
                square_url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5_s.jpg",
                native_page_url: "https://www.flickr.com/photos/ken-ichi/2640144803/",
                small_url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5_m.jpg",
                attribution: "(c) Ken-ichi, some rights reserved (CC BY-NC)",
                medium_url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5.jpg",
                id: 1288,
                license_code: "cc-by-nc",
                large_url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5_b.jpg",
                url: "https://farm4.staticflickr.com/3194/2640144803_219b9ab6c5_s.jpg",
                original_dimensions: null
              },
              ancestor_ids: [
                1,
                12
              ],
              iconic_taxon_name: "Plantae",
              preferred_common_name: "Plants"
            }
          ],
          children: [
            {
              observations_count: 1,
              is_active: true,
              iconic_taxon_id: 12,
              rank_level: 30,
              parent_id: 39,
              name: "Cactaceae",
              rank: "family",
              id: 1545,
              default_photo: {
                square_url: "https://farm4.staticflickr.com/3393/3345272825_112d5a9984_s.jpg",
                attribution: "(c) Ken-ichi, some rights reserved (CC BY-NC)",
                medium_url: "https://farm4.staticflickr.com/3393/3345272825_112d5a9984.jpg",
                id: 275,
                license_code: "cc-by-nc",
                url: "https://farm4.staticflickr.com/3393/3345272825_112d5a9984_s.jpg"
              },
              ancestor_ids: [
                1,
                12,
                19,
                20,
                39,
                1545
              ],
              iconic_taxon_name: "Plantae"
            }
          ]
        }
      ]
    } );
  }

  static v1ToV2( ) {
    iNaturalistAPI.setConfig( {
      apiURL: iNaturalistAPI.apiURL.replace( "/v1", "/v2" ),
      writeApiURL: iNaturalistAPI.apiURL.replace( "/v1", "/v2" )
    } );
  }

  static v2ToV1( ) {
    iNaturalistAPI.setConfig( {
      apiURL: iNaturalistAPI.apiURL.replace( "/v2", "/v1" ),
      writeApiURL: iNaturalistAPI.apiURL.replace( "/v2", "/v1" )
    } );
  }
};

module.exports = testHelper;
