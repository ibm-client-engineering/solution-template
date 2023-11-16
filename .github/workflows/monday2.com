name: Create Monday.com Board

on:
  push:
    branches:
      - main

jobs:
  create_board_and_card:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Create Monday.com Board
      run: |
        MONDAY_API_KEY=<YOUR_MONDAY_API_KEY>
        BOARD_NAME="New Board"

        # Create a new board
        board_id=$(curl -s --request POST \
          --url 'https://api.monday.com/v2/boards' \
          --header "Content-Type: application/json" \
          --header "Authorization: $MONDAY_API_KEY" \
          --data-raw '{
            "name": "'"$BOARD_NAME"'",
            "board_kind": "public"
          }') 

        echo "Created board with ID: $board_id"

    - name: Create Monday.com Card
      run: |
        MONDAY_API_KEY=<YOUR_MONDAY_API_KEY>
        BOARD_ID=<REPLACE_WITH_BOARD_ID>
        ITEM_NAME="New Card"

        # Create a new card
        curl --request POST \
          --url 'https://api.monday.com/v2/items' \
          --header "Content-Type: application/json" \
          --header "Authorization: $MONDAY_API_KEY" \
          --data-raw '{
            "board_id": '"$BOARD_ID"',
            "name": "'"$ITEM_NAME"'"
          }'

