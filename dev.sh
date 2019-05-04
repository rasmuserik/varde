while inotifywait -e modify,close_write,move_self -q src/*.js
do 
  npm run build
done
