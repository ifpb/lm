#include <QApplication>
#include <QLabel>

int main(int argc, char **argv)
{
  QApplication app (argc, argv);

  QLabel* label = new QLabel("Lorem ipsum dolor");
  label->setStyleSheet("QLabel { color : blue; font-size : 17px”);
  label->show();

  return app.exec();
}