# Generated by Django 4.0.2 on 2022-02-22 18:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_category_comments_alter_blog_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='category',
            field=models.ForeignKey(choices=[('Artificial Intelligence', 'Artificial Intelligence'), ('Gadgets', 'Gadgets'), ('Robotics', 'Robotics'), ('IoT', 'Iot')], on_delete=django.db.models.deletion.PROTECT, to='blog.category'),
        ),
    ]
