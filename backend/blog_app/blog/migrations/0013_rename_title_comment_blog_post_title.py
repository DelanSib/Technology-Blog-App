# Generated by Django 4.0.2 on 2022-02-24 12:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0012_comment_date_created'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='title',
            new_name='blog_post_title',
        ),
    ]