BACK-END

Set Up:
* [x] Install Django app into Django project for hats microservice

models.py
Hat Model Planning:
* [x]  fabric attribute
  * [x]  charfield, max length 200
* [x]  style_name attribute
  * [x]  charfield, max length 200
* [x]  color attribute
  * [x]  charfield, max length 200
* [x]  picture_url attribute
  * [x]  urlField, null=True
* [x]  location attribute
  * [x]  ForeignKey, relates to LocationVO model, related_name "hats", on delete "Cascade"

LocationVO Planning: 
* We are creating a LocationVO because the Location model is in another bounded context seperate from hats. Therefore to use "Location" we would have to create another Location model in hats_rest models.py and we attach VO to the end to signify it is a value object.
* [x] close_name attribute:
  * [x] charfield, max length 100
* [x] section_number attribute:
  * [x] PositiveSmallintegerField
* [x] shelf_number attribute:
  * [x] PositiveSmallintegerField

views.py
* [x] Import LocationVo and Hat models
* [x] Create Encoders
  * [x] LocationVODetailEncoder
    * [x] model = LocationVO
    * [x] properties [import_href, closet_name, section_number, shelf_number]
  * [x] HatListEncoder
    * [x] model = Hat
    * [x] properties = ["fabric", "style_name", "color", "picture_url"]
    * [x] encoders = {"location": LocationVODetailEncoder()}
    * [x] def get_extra_data(self, o):
      * [x] return {
            "location": o.location.closet_name,
            }
    * [x] HatDetailEncoder:
      * [x] model = Hat
      * [x] properties = {
        "fabric",
        "style_name",
        "color",
        "pictur_url",
        }
      * [x] encoders = {"location": LocationDetailEncoder()

Hat list
* [x] require_http_methods(["GET", "POST"])
* [x] def api_list_hats(request):
* [x] GET
  * [x] if request.method == "GET":
    * [x] if location_vo_id is not None:
      * [x] hats = Hat.objects.filter(location=location_vo_id)
    * [x] else:
      * [x] hats = Hat.objects.all()
    * [x] return JsonResponse(
      * [x] {"hats": hats},
      * [x] encoder=HatListEncoder)
* [x] POST
  * [x] else:
    * [x] content = js.loads(request.body)
    * [x] try
      * [x] location_href = content["location"]
      * [x] location = LocationVO.objects.get(id=location_href)
      * [x] content["location"] = location
    * [x] except LocationVO.DoesNotExist"
      * [x] return JsonResponse(
        * [x] {"messege": "Invalid location id"},
        * [x] status=400,)
    * [x] hat = Hat.objects.create(**content)
    * [x] return JsonResponse(
      * [x] hat,
      * [x] encoder=HatDeatilEncoder,
      * [x] safe=False,)


hats_rest -> api_urls.py

* [x] Create URL paths for list hats and hat detail
* [x] api_list_hats
  * [x] path("hats/", api_list_hats, name="api_list_hats"),
* [x] api_show_hats
  * [x] path("hats/<int:pk>/", api_show_hat, name="api_hat_detail")

hats_project -> urls.py
* create api url path and include hats_rest api_urls to the path
  * [x]path('api/', include('hats_rest.api_urls')


FRONT-END
* [ ] 