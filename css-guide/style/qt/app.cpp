#include <QApplication>
#include <QLabel>
#include <QFile>
#include <QString>

int main(int argc, char **argv)
{
  QApplication app (argc, argv);

  QFile File("style.qss");
  File.open(QFile::ReadOnly);
  QString StyleSheet = QLatin1String(File.readAll());
  app->setStyleSheet(StyleSheet);

  QLabel* label = new QLabel("Lorem ipsum dolor");
  label->setStyleSheet("QLabel { color : blue; font-size : 17px");
  label->show();

  return app.exec();
}