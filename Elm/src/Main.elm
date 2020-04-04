module Main exposing (..)

-- Press buttons to increment and decrement a counter.
--
-- Read how it works:
--   https://guide.elm-lang.org/architecture/buttons.html
--

import Browser
import Html exposing (Html, Attribute, button, div, text, input)
import Html.Events exposing (onClick, onInput)
import Html.Attributes exposing (..)

-- MAIN
main =
  Browser.sandbox { init = init, update = update, view = view }

-- MODEL
type alias Model = 
  { count: Int
  , name: String
  , password: String
  , passwordAgain: String
  }

init : Model
init = 
  Model 0 "" "" ""

-- UPDATE

type Msg
  = OnIncrement
  | OnDecrement
  | OnInputChange String
  | OnNameInput String
  | OnPassword String
  | OnPasswordAgain String

update : Msg -> Model -> Model
update msg model =
  case msg of
    OnIncrement ->
      { model | count = model.count + 1 }
    OnDecrement ->
      { model | count = model.count - 1 }
    OnInputChange newContent -> 
      { model | count = Maybe.withDefault 0 (String.toInt(newContent)) }
    OnNameInput name ->
      { model | name = name }
    OnPassword password ->
      { model | password = password }
    OnPasswordAgain password ->
      { model | passwordAgain = password }
      
-- VIEW
view : Model -> Html Msg
view model =
  div[]
  [ div []
    [ button [ onClick OnDecrement ] [ text "-" ]
    , div [] [ text (String.fromInt(model.count)) ]
    , div [] [ text  "Hello" ]
    , input [ placeholder "Test"
      , value (String.fromInt(model.count))
      , onInput OnInputChange ] [] 
    , button [ onClick OnIncrement ] [ text "+" ]
    ]
  , div []
    [ viewInput "text" "Name" model.name OnNameInput
    , viewInput "password" "Password" model.password OnPassword
    , viewInput "password" "Re-enter Password" model.passwordAgain OnPasswordAgain
    , viewValidation model
    ]
  ]
    
viewInput : String -> String -> String -> (String -> msg) -> Html msg
viewInput t p v toMsg =
  input [ type_ t, placeholder p, value v, onInput toMsg ] []


viewValidation : Model -> Html msg
viewValidation model =
  if model.password == model.passwordAgain then
    div [ style "color" "green" ] [ text "OK" ]
  else
    div [ style "color" "red" ] [ text "Passwords do not match!" ] 